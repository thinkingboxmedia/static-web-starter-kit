static-web-starter-kit
===============

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A front-end template that helps you build fast, modern mobile web apps. (IE9+) @see [Web Starter Kit](https://github.com/google/web-starter-kit)


## Installation
 
[NodeJS](http://nodejs.org) - use the installer (>=5.0.0).

## Getting Started

- Install: `yarn`
- Run: `yarn run dev`

## Features

* [React](http://facebook.github.io/react/) / ES6 (https://babeljs.io/) / [Webpack](https://webpack.github.io/) ♡
* Hot module replacement with webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware)
* Data flow with react-redux (https://github.com/rackt/react-redux)
* Routing with react-router-redux (https://github.com/rackt/react-router-redux)
* Code linting with ESLint (http://eslint.org)


#### Third-Party Dependencies

*(HTML/CSS/JS/Images/etc)*

Third-party dependencies are managed with **Yarn**

```sh
$ yarn add awesome-module -S
```

## Generator

Generate new templated components with `yarn run generate`

### Types

#### Component -> Stateless Function Component

Adds a new stateless function component with the component name specified using the following structure:

```
/components
    /ComponentName
        ComponentName.js
        ComponentName.css
```

#### Component -> ES6 Class Component

Adds a new class component with the component name specified using the following structure:

```
/components
    /ComponentName
        ComponentName.js
        ComponentName.css
```

#### Container -> ES6 Class Redux Container

Adds a new Redux-connected container class component with the component name specified using the following structure:

```
/containers
    /ComponentName
        ComponentName.js
        ComponentName.css
        componentNameActionTypes.js
        componentNameActions.js
        componentNameReducer.js
```

The component reducer will be automatically imported and added to the combineReducers root-reducer created in `/store/reducers.js`.

### Options

The following options are available on all generated components:

* Styles - will generate styles in ComponentName.css
* F1 Animations - will generate F1 animations in ComponentNameF1States.js and ComponentNameF1Transitions.js

## Test

```sh
$ yarn run test
```

## Build

```sh
$ yarn run build
```
