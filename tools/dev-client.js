require('eventsource-polyfill');
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true'); // eslint-disable-line

hotClient.subscribe(function (event) {  // eslint-disable-line
  if (event.action === 'reload') {
    window.location.reload();
  }
});
