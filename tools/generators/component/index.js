/**
 * Component Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => ['ES6 Class', 'Stateless Function'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Component',
      validate: value => {
        if ((/.+/).test(value)) {
          return componentExists(value) ? 'A component or container with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantCSS',
      default: true,
      message: 'Does it have styling?',
    },
    {
      type: 'confirm',
      name: 'wantF1',
      default: true,
      message: 'Does it have F1 animations?',
      when: response => {
        return response.type === 'ES6 Class' ? true : false;
      },
    },
  ],
  actions: data => {
    // Generate Component.js and index.js
    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.js',
        templateFile: data.type === 'ES6 Class' ? './component/es6.js.hbs' : './component/stateless.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.js',
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
    ];

    // If they want a CSS file
    if (data.wantCSS) {
      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.css',
        templateFile: './component/styles.css.hbs',
        abortOnFail: true,
      });
    }

    // If they want F1 animations
    if (data.wantF1 && data.type === 'ES6 Class') {
      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}F1States.js',
        templateFile: './component/F1States.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}F1Transitions.js',
        templateFile: './component/F1Transitions.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
