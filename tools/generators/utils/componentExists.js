/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const components = fs.readdirSync('src/components');

function componentExists(component) {
  return components.indexOf(component) >= 0;
}

module.exports = componentExists;
