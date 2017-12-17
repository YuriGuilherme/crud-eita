# CRUD-EITA - Front-end
> A Vue.js Front-end Test. [Demo](https://crud-eita.herokuapp.com)
## Demo
https://crud-eita.herokuapp.com

![Overview](https://i.imgur.com/eqMZnf7.png)
## Features
- Add Contact
- List Contacts
- Show specific Contact

## Additional features
- Search contact by name
- Find by starred or not starred contact

## Folder structure
```sh
├── assets
│   ├── css
│   │   └── styles.css // stylesheet of project
│   └── fonts
├── build // webpack settings
├── dist // webpack build
├── src // source code
│   ├── components // dumbie components
│   ├── core // basic application settings
│   ├── router // application routes control
│   ├── shared // service and filters
│   └── store
│       ├── modules // states, mutations, actions, getters methods of a component
│       ├── index //store - vuex
│       └── mutations-types // types of mutations supported by the modules
├── index.html
├── node_modules
└── package.json
```


## Tools and Frameworks
- ES6
- Sass
- VueJs
- Vuex
- Vue-cli
- Webpack

## Install dependencies
```sh
> npm install
or
> yarn install
```
## Running server at localhost:8080
```sh
> npm run dev
or
> yarn dev
```

## Tests
#### run unit tests
```sh
> npm run unit
or
> yarn unit
```
#### run e2e tests
```sh
> npm run e2e
or
> yarn e2e
```
#### run all tests
```sh
> npm test
or
> yarn test
```
## Build
```sh
> npm run build
or
> yarn build
```

## TODO
- [x] Add Contacts
- [x] Form validation
- [x] Mask input
- [x] Implementation of Vuex
- [x] Contacts listing
- [x] Show specific contact
- [x] Search contact by name
- [x] Find by starred or not starred contact
- [ ] Tests
