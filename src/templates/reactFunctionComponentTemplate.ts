import { Language, StyleLanguage } from "../types";

export function reactFunctionComponentTemplate(
  componentName: string,
  language: Language,
  stylesLanguage: StyleLanguage = StyleLanguage.scss,
  componentTemplate?: string[]
) {
  if (Array.isArray(componentTemplate) && componentTemplate.length > 0) {
    return componentTemplate
      .join("\n")
      .replaceAll("${componentName}", componentName)
      .replaceAll("${stylesLanguage}", stylesLanguage)
      .replaceAll("${language}", language);
  }

  let template = `
import React from 'react';

import styles from './${componentName}.${stylesLanguage}';
`;

  if (language === Language.javaScript) {
    template += `
export function ${componentName}({prop}) {
  return <div className={styles.${componentName.toLowerCase()}}>${componentName} {prop}</div>;
}
`;
  }

  if (language === Language.typeScript) {
    template += `
export interface ${componentName}Props {
  prop?: string;
}

export function ${componentName}({prop = 'default value'}: ${componentName}Props) {
  return <div className={styles.${componentName.toLowerCase()}}>${componentName} {prop}</div>;
}
`;
  }

  return template.trimStart();
}
