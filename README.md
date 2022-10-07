# React Component Generator

A VS Code extension for generating new React component files with the following structure:

- `StartingComponent`
  - `/components`
    - `index.ts`
    - `/NewComponent`
      - `index.ts`
      - `NewComponent.tsx`
      - `/tests`
        - `NewComponent.test.tsx`

## Features

Right click in the file editor or on a file in the explorer and click `Generate React component` to scaffold out a new React component with all the files you need.

## Settings

| Name | Description	| Default |
|----- | ------------ | -------- |
| reactComponentGenerator.language	| Specifies if components should be generated in TypeScript or JavaScript. | ts
| reactComponentGenerator.stylesLanguage	| Specifies what language will be used for styles.	| scss
| reactComponentGenerator.useIndexFile	| Specifies if the components folder should have an index file to export all of its components.	| true
| reactComponentGenerator.createTestsFile	| Specifies if the components should have test files.	| false
