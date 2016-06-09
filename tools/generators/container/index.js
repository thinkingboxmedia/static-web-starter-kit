/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Container',
      validate: value => {
        if ((/.+/).test(value)) {
          return componentExists(value) ? 'A component or container with this name already exists' : true;
        }

        return 'The name is required.';
      },
    },
    {
      type: 'confirm',
      name: 'wantCSS',
      default: false,
      message: 'Does it have styling?',
    },
    {
      type: 'confirm',
      name: 'wantF1',
      default: false,
      message: 'Does it have F1 animations?',
    },
    // {
    //   type: 'confirm',
    //   name: 'wantRoute',
    //   default: false,
    //   message: 'Does it have a route?',
    // },
    // {
    //   type: 'input',
    //   name: 'routePath',
    //   default: response => {
    //     return response.name.toLowerCase();
    //   },
    //   message: 'Enter the path of the route.',
    //   when: response => {
    //     return response.wantRoute;
    //   },
    //   validate: value => {
    //     if ((/.+/).test(value)) {
    //       return true;
    //     }

    //     return 'path is required';
    //   },
    // },
  ],
  actions: data => {
    // Generate Container.js and index.js
    const actions = [
      {
        type: 'add',
        path: '../../src/containers/{{properCase name}}/{{properCase name}}.js',
        templateFile: './container/es6.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/containers/{{properCase name}}/index.js',
        templateFile: './container/index.js.hbs',
        abortOnFail: true,
      },
    ];

    // If they want a CSS file
    if (data.wantCSS) {
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/{{properCase name}}.css',
        templateFile: './container/styles.css.hbs',
        abortOnFail: true,
      });
    }

    // If they want F1 animations
    if (data.wantF1) {
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/{{properCase name}}F1States.js',
        templateFile: './container/F1States.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/{{properCase name}}F1Transitions.js',
        templateFile: './container/F1Transitions.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want to add a route
    // if (data.wantRoute) {
    //   actions.push({
    //     type: 'modify',
    //     path: '../../src/routes.js',
    //     pattern: /(<Route path="\*")/g,
    //     template: '<Route path=\"{{lowerCase routePath}}\" component={ {{properCase name}} } />\n    $1',
    //   });
    // }

    // Actions
    actions.push({
      type: 'add',
      path: '../../src/containers/{{properCase name}}/{{ camelCase name }}Actions.js',
      templateFile: './container/actions.js.hbs',
      abortOnFail: true,
    });

    // ActionTypes
    actions.push({
      type: 'add',
      path: '../../src/containers/{{properCase name}}/{{ camelCase name }}ActionTypes.js',
      templateFile: './container/actionTypes.js.hbs',
      abortOnFail: true,
    });

    // Reducer
    actions.push({
      type: 'add',
      path: '../../src/containers/{{properCase name}}/{{ camelCase name }}Reducer.js',
      templateFile: './container/reducer.js.hbs',
      abortOnFail: true,
    });
    actions.push({ // Add the reducer to the reducer.js file
      type: 'modify',
      path: '../../src/store/reducers.js',
      pattern: /(routing,\n\s{0,}}\);)/gi,
      template: '{{camelCase name}}Reducer,\n  $1',
    });
    actions.push({
      type: 'modify',
      path: '../../src/store/reducers.js',
      pattern: /(\nexport default combineReducers)/gi,
      template: 'import { {{camelCase name}}Reducer } from \'../containers/{{properCase name}}/{{camelCase name}}Reducer\';\n$1',
    });

    return actions;
  },
};
