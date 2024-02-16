# Project Overview

### MemoMoew 😺 - a furry memory game 

🚀 Try it here: https://cristijigau.github.io/memory-game

This repository contains a Vite single-page application (SPA) built with React, TypeScript, and Material-UI (MUI).

## Architecture

### Technologies Used:
- Vite
- React
- TypeScript
- Material-UI
- PNPM

## Why Vite?

I picked Vite for my small project instead of fancier options like Next.js or Gatsby and other options provided in the new React docs because I didn't need all their extra stuff. CRA (Create React App) wasn't my choice either because it's not supported anymore. Vite seemed like the best fit because it's lightweight and easy to use, just what I needed to get started quickly.

## Why PNPM?

I chose PNPM over Yarn and NPM because it saves disk space by sharing dependencies across projects and installs packages faster.

## Why Material-UI?

Material UI is a React component library that provides components with great styling and functionality out of the box. I have experience using this library so I knew it would fit my needs for
the current project.

## App State:

The app utilizes both a main application-wide state and local component states. With the main game state being shared across multiple components, I opted for React Context to centralize state management, ensuring changes to the global state occur in one location and simplifying access to common state across components, thereby eliminating the need for prop drilling.

I chose React Context instead of Redux for this project because Redux is typically used in larger projects with complex global state management involving multiple slices and reducers. Since my app is small and doesn't have a complex global state or many actions triggering state changes, I found React Context to be sufficient for managing state without the added complexity of Redux.

## Components:
- _App Component_: Responsible for rendering the main layout component GameLayout and provides context providers for global state management and custom theming.
- _GameLayout Component_: the main layout component.
- _CardTable Component_: Renders the grid of memory cards for the game. It encapsulates the logic for rendering cards and handling user interactions.
- _CurrentPlayer Component_: Displays information about the current player.
- _ErrorCard Component_: Renders an error message when an error occurs during data fetching or processing.
- _FlipCard Component_: Represents an individual memory card. It handles card flips and displays the image fetched from the external API.
- _GameAppBar Component_: Is intended to render the app bar with game controls and settings. Currently it only displays the current user info.
- _GameResults Component_: Displays the results of the game, including the final score for each player.
- _Settings Component_: Should provide user settings and configurations for the game. Currently it only allows to select the number of players and enter their names.

## Contexts

### GameStateContext
Manages the global state of the game.

## Hooks

### useFetchData
A custom hook for fetching data from external APIs.

## Theme

### CustomThemeProvider
Provides a custom theme for the application which should include colors and styling variables. Currently it only includes colors.

## Common Utilities

- `constants.ts`: Contains common constants used throughout the application.
- `helpers.ts`: Provides helper functions for tasks such as data manipulation.
- `types.ts`: Defines types and interfaces used across the application.

## Known limitations:

### Browser Compatibility: 
The application may not be fully compatible with older browsers due to the use of modern JavaScript features and CSS properties. Polyfills or fallbacks may be needed for broader browser support.

### Performance Optimization: 
While Vite provides excellent development experience and fast HMR, further optimization techniques such as code splitting, lazy loading, and image optimization can be implemented to improve performance.

### Accessibility: 
Although Material-UI provides accessible components out of the box, ensuring comprehensive accessibility across all user interactions and screen sizes requires careful testing and additional adjustments.

## Potential next steps:
- Add keyboard navigation for accessibility;
- Add form validations and better error handling;
- Write tests to ensure the reliability and stability of the app. Integrate testing frameworks like Jest and React Testing Library into the project;
- Improve app styling. I am not quite happy with the current styling as I see space for improvement;
- Add more features for the players like: Possibility to go back and forth through game history; Posibility to change time available to see all the cards and add time limit
for picking matches and other;

## Development Workflow

### Installation
Run `pnpm install` to install dependencies.

### Development
Run `pnpm dev` to start the development server with hot module replacement (HMR).

### Production Build
Run `pnpm build` to create an optimized production build.

### Deployment
Deploy the contents of the `dist` directory to a web server.

## Folder Structure:

```
    └── 📁src
        └── App.tsx
        └── 📁assets
            └── planable.png
        └── 📁common
            └── constants.ts
            └── helpers.ts
            └── types.ts
        └── 📁components
            └── 📁CardTable
                └── index.tsx
                └── styled.tsx
            └── 📁CurrentPlayer
                └── index.tsx
                └── styled.tsx
            └── 📁ErrorCard
                └── index.tsx
                └── types.ts
            └── 📁FlipCard
                └── index.tsx
                └── styled.tsx
            └── 📁GameAppBar
                └── index.tsx
                └── styled.tsx
            └── 📁GameLayout
                └── index.tsx
                └── styled.tsx
            └── 📁GameResults
                └── index.tsx
                └── styled.tsx
            └── 📁Settings
                └── constants.ts
                └── index.tsx
                └── styled.tsx
        └── 📁contexts
            └── 📁GameStateContext
                └── index.tsx
                └── types.ts
        └── 📁hooks
            └── useFetchData.ts
        └── index.css
        └── main.tsx
        └── 📁theme
            └── colors.ts
            └── CustomThemeProvider.tsx
        └── vite-env.d.ts
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
    └── .eslintrc.cjs
    └── .gitignore
    └── .prettierrc.cjs
    └── index.html
    └── package.json
    └── pnpm-lock.yaml
    └── README.md
```
