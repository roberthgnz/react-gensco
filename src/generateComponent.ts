import { window, Uri } from "vscode";
import * as path from "path";

import {
  writeFile,
  getSetting,
  readFile,
  openFile,
  startWithLower,
  extractFolder,
  pathWithFile,
} from "./utilities";
import {
  exportLineTemplate,
  reactFunctionComponentTemplate,
  testFileTemplate,
  stylesTemplate,
} from "./templates";
import { Language, StyleLanguage } from "./types";

/**
 * If extension invokation happens with focus on editor,
 * folder needs to be extracted from the document's file-path
 */
function directoryToAddComponent(
  uriFromExplorer: Uri | undefined,
  uriFromActiveEditor: Uri | undefined
) {
  if (!uriFromExplorer) {
    return extractFolder(uriFromActiveEditor.path);
  }
  if (pathWithFile(uriFromExplorer.path)) {
    return extractFolder(uriFromExplorer.path);
  }
  return uriFromExplorer.path;
}

async function writeComponentsFolderIndexFile(
  directory: string,
  componentName: string,
  language: Language
) {
  const componentsFolderIndexPath = `${directory}/index.${language}`;
  const componentsFolderIndexContents = await readFile(
    componentsFolderIndexPath
  );

  if (componentsFolderIndexContents) {
    writeFile(
      componentsFolderIndexPath,
      componentsFolderIndexContents.concat(
        exportLineTemplate(componentName, true)
      )
    );
  } else {
    writeFile(
      componentsFolderIndexPath,
      exportLineTemplate(componentName, true)
    );
  }
}

async function writeComponentFiles(directory: string, componentName: string) {
  const language = getSetting<Language>("language", Language.typeScript);
  const stylesLanguage = getSetting<StyleLanguage>(
    "stylesLanguage",
    StyleLanguage.scss
  );
  const tests = getSetting<boolean>("createTestsFile", false);
  const useIndexFile = getSetting<boolean>("useIndexFile", true);
  const lowerCaseStylesFile = getSetting<boolean>("lowerCaseStylesFile", false);

  // Write index file
  writeFile(
    `${directory}/${componentName}/index.${language}`,
    exportLineTemplate(componentName)
  );

  // Write component file
  const componentPath = `${directory}/${componentName}/${componentName}.${language}x`;
  const templateFromConfig = getSetting<string[]>("componentTemplate", []);
  const componentPromise = writeFile(
    componentPath,
    reactFunctionComponentTemplate(
      componentName,
      language,
      stylesLanguage,
      templateFromConfig
    )
  );

  // Write style file
  writeFile(
    `${directory}/${componentName}/${
      lowerCaseStylesFile ? startWithLower(componentName) : componentName
    }.${stylesLanguage}`,
    stylesTemplate(componentName)
  );

  // Write test file
  if (tests) {
    writeFile(
      `${directory}/${componentName}/tests/${componentName}.test.${language}x`,
      testFileTemplate(componentName)
    );
  }

  // Write components folder index file
  if (useIndexFile && !directory.endsWith("app/components")) {
    writeComponentsFolderIndexFile(directory, componentName, language);
  }

  await componentPromise;
  openFile(componentPath);
}

// This is the function that gets registered to our command
export async function generateComponent(uri?: Uri) {
  if (!uri && !window.activeTextEditor) {
    return window.showErrorMessage("No file path found.");
  }

  const componentName = await window.showInputBox({
    prompt: "Component name",
  });

  if (!componentName) {
    return window.showErrorMessage("No component name passed");
  }

  const directory = directoryToAddComponent(
    uri,
    window.activeTextEditor?.document.uri
  );

  writeComponentFiles(directory, componentName);
}
