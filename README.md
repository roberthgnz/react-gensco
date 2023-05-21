[![Marketplace](https://img.shields.io/visual-studio-marketplace/i/roberth.react-gensco)](https://marketplace.visualstudio.com/items?itemName=roberth.react-gensco)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.hanskrebs.me/"><img src="https://avatars.githubusercontent.com/u/7346919?v=4?s=100" width="100px;" alt="Hans"/><br /><sub><b>Hans</b></sub></a><br /><a href="https://github.com/roberthgnz/react-gensco/commits?author=HansKre" title="Code">💻</a> <a href="https://github.com/roberthgnz/react-gensco/commits?author=HansKre" title="Documentation">📖</a> <a href="https://github.com/roberthgnz/react-gensco/issues?q=author%3AHansKre" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!