
var express = require('express')
var app = express()
var proxyMiddleware = require('http-proxy-middleware')

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = {
  // '/api': {
  //   target: 'http://jsonplaceholder.typicode.com',
  //   changeOrigin: true,
  //   pathRewrite: {
  //     '^/api': ''
  //   }
  // }
}

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve pure static assets
//app.use(express.static('static'));

module.exports = app.listen(8081, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8081\n')
})
