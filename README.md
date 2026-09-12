# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

# Devstack

## Project Description

Devstack is a simple and user-friendly web application that helps users explore different technologies and build their own technology stack.

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* DaisyUI

## Features

1. Explore Technologies — Users can browse different technologies and their details.
2. Build Your Stack — Users can add their favorite technologies to their personal stack.
3. Manage Your Stack — Users can remove technologies from their stack easily.

## Question answer 

1. JSX is a syntax and they have javascript/typescript where we can write html code.JSX use in react for better and clear understanding the UI.

2. pops- where data send parent to child component.
state-where data changed for main time.

3. useState helps store and update the data.In this project i used the use state to technology stack for manage the data.

4. while the component load and the main data will changing in that the main time useEffect helps to work and in this project i use the useEffect while data load to JSON file to technology data.

5. By using key the react understand that listed item and react can updated the item bu use key.

6. conditional rending mean showing different UI based on a condition.I use it in this project when technology stack have no item in that main time show the empty stack message.

7. By using props method to send data parent to child component.A child can send info back by calling a function passed through props.