# To-Do Client

## Installation

The following requirements are assumed to be installed on your computer:

- [Git](https://github.com/git-guides/install-git)
- [Node](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/)

First, pull the project into your working environment:

```zsh
git pull git@github.com/mayoz/vuejs-todo-client
```

Then pull the packages it depends on:

```zsh
npm install
```

Do not forget to change the `.env` file.
To quickly run (compile and hot-reloads) the application in the development environment:

```zsh
npm run serve
```

You should be able to access the app on [`localhost:8080`](http://localhost:8080).

Other commands can be use in development environment:

- Run your unit tests: `npm run test:unit`
- Lints and fixes files: `npm run lint`
