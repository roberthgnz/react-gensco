[![Marketplace](https://img.shields.io/visual-studio-marketplace/i/roberth.react-gensco)](https://marketplace.visualstudio.com/items?itemName=roberth.react-gensco)
[![Github](https://img.shields.io/github/stars/rxb3rth/react-gensco?style=social)](https://github.com/rxb3rth/react-gensco)
[![Twitter](https://img.shields.io/twitter/follow/rxb3rth?style=social)](https://twitter.com/rxb3rth)
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

Right click in the file editor or on a file in the explorer and click `Generate React component` to scaffold out a new React component with all the files you need.

## Settings

| Name | Description	| Default |
|----- | ------------ | -------- |
| reactComponentGenerator.language	| Specifies if components should be generated in TypeScript or JavaScript. | ts
| reactComponentGenerator.stylesLanguage	| Specifies what language will be used for styles.	| scss
| reactComponentGenerator.useIndexFile	| Specifies if the components folder should have an index file to export all of its components.	| true
| reactComponentGenerator.createTestsFile	| Specifies if the components should have test files.	| false
