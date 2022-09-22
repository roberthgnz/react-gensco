# Simple Simple React Component Generator

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

- **Language** - Specifies if components should be generated in TypeScript or JavaScript.
- **Styles Language** - Specifies what language will be used for styles.
- **Use Index File** - Specifies if the components folder should have an index file to export all of its components. Does not add or update the index file at `app/components/index`
