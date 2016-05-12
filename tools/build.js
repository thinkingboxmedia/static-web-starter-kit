
var shell = require('shelljs');
process.env.NODE_ENV = 'production'

var ora = require('ora')
var webpack = require('webpack')
var conf = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()

shell.rm('-rf', 'dist')
shell.mkdir('dist')
shell.cp('-R', 'static/.', conf.output.path)

webpack(conf, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  }) + '\n')
})
