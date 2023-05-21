import { window, workspace, Uri } from "vscode";
import * as path from "path";

export async function writeFile(path: string, content: string) {
  return workspace.fs.writeFile(
    Uri.file(path),
    new Uint8Array(Buffer.from(content))
  );
}

export function getSetting<T>(key: string, defaultValue: T): T {
  const value: T | undefined = workspace
    .getConfiguration("reactComponentGenerator")
    .get(key);

  return value === undefined ? defaultValue : value;
}

export async function readFile(path: string) {
  try {
    const file = await workspace.fs.readFile(Uri.file(path));
    return file.toString();
  } catch {
    return null;
  }
}

export function openFile(path: string) {
  workspace.openTextDocument(Uri.file(path)).then((doc) => {
    window.showTextDocument(doc);
  });
}

export function pathWithFile(pathStr: string) {
  return pathStr.split(path.sep).slice(-1)[0].includes(".");
}

export function extractFolder(pathStr: string) {
  return pathStr.split(path.sep).slice(0, -1).join(path.sep);
}
