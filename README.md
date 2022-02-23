# React Material UI


Application example built with [React](https://reactjs.org/) and adding the [Material UI](https://mui.com/) CSS framework using the [@mui/material](https://www.npmjs.com/package/@mui/material) library.

This tutorial was posted on my [blog]() in portuguese and on the [DEV Community]() in english.



[![Website](https://shields.braskam.com/v1/shields?name=website&format=rectangle&size=small&radius=5)](https://rodrigo.kamada.com.br)
[![LinkedIn](https://shields.braskam.com/v1/shields?name=linkedin&format=rectangle&size=small&radius=5)](https://www.linkedin.com/in/rodrigokamada)
[![Twitter](https://shields.braskam.com/v1/shields?name=twitter&format=rectangle&size=small&radius=5&socialAccount=rodrigokamada)](https://twitter.com/rodrigokamada)



## Prerequisites


Before you start, you need to install and configure the tools:

* [git](https://git-scm.com/)
* [Node.js and npm](https://nodejs.org/)
* IDE (e.g. [Visual Studio Code](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/))



## Getting started


### Create the React application

**1.** Let's create the application with the React base structure using the `create-react-app` tool.

```powershell
npx create-react-app react-mui --template typescript

Creating a new React app in /home/rodrigokamada/Development/React/react-mui.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template-typescript...


added 1369 packages in 32s

169 packages are looking for funding
  run `npm fund` for details

Initialized a git repository.

Installing template dependencies using npm...
npm WARN deprecated source-map-resolve@0.6.0: See https://github.com/lydell/source-map-resolve#deprecated

added 38 packages, and changed 1 package in 3s

169 packages are looking for funding
  run `npm fund` for details

We detected TypeScript in your project (src/App.test.tsx) and created a tsconfig.json file for you.

Your tsconfig.json has been populated with default values.

Removing template package using npm...


removed 1 package, and audited 1407 packages in 2s

169 packages are looking for funding
  run `npm fund` for details

8 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Created git commit.

Success! Created react-mui at /home/rodrigokamada/Development/React/react-mui
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-mui
  npm start

Happy hacking!
```

**2.** Install the `@mui/material`, `@mui/icons-material`, `@emotion/react` and `@emotion/styled` libraries.

```powershell
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```
