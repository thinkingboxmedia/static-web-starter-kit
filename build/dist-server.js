
var express = require('express')
var app = express()



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
