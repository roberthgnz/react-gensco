[![Marketplace](https://img.shields.io/visual-studio-marketplace/i/roberth.react-gensco)](https://marketplace.visualstudio.com/items?itemName=roberth.react-gensco)
[![Github](https://img.shields.io/github/stars/roberthgnz/react-gensco?style=social)](https://github.com/roberthgnz/react-gensco)
[![Twitter](https://img.shields.io/twitter/follow/roberthgnz?style=social)](https://twitter.com/roberthgnz)
[![buymeacoffee](https://img.shields.io/badge/buymeacoffee-%24-yellow)](https://www.buymeacoffee.com/roberth.gonz)

# React Component Generator

Generate React components:

- `src`
  - `/components`
    - `/NewComponent`
      - `index.ts|.js`
      - `NewComponent.css|.scss|.module.css|.module.scss`
      - `NewComponent.ts|.js`
      - `/tests`
        - `NewComponent.test.ts|.js`

## Features

Right click on a folder in the explorer and click `Generate React component` to scaffold out a new React component with all the files you need. Or choose `Generate React component` from Command Palette while in an Active Editor.

## Using Component Templates

If you are not happy with the default component template, you can bring your own using the `reactComponentGenerator.componentTemplate` in your settings.

Consider following example component template:

```json
"reactComponentGenerator.componentTemplate": [
    "import React from 'react';",
    "",
    "import styles from './${componentName}.${stylesLanguage}';",
    "",
    "type Props = {",
    "  //",
    "}",
    "",
    "export function ${componentName}(props: Props) {",
    "  return (<div className={styles.container}></div>)",
    "}"
  ]
```

This would generate components like this:

```ts
import React from "react";

import styles from "./SuperCoolComponent.module.scss";

type Props = {
  //
};

export function SuperCoolComponent(props: Props) {
  return <div className={styles.container}></div>;
}
```

## Settings

| Name                                      | Description                                                                                   | Default |
| ----------------------------------------- | --------------------------------------------------------------------------------------------- | ------- |
| reactComponentGenerator.language          | Specifies if components should be generated in TypeScript or JavaScript.                      | ts      |
| reactComponentGenerator.stylesLanguage    | Specifies what language will be used for styles.                                              | scss    |
| reactComponentGenerator.useIndexFile      | Specifies if the components folder should have an index file to export all of its components. | true    |
| reactComponentGenerator.createTestsFile   | Specifies if the components should have test files.                                           | false   |
| reactComponentGenerator.componentTemplate | Specifies a temlate for components using a string-array.                                      | none    |