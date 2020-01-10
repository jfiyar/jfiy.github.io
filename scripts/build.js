module.exports = async function() {
  const chalk = require('chalk')
  const portfinder = require('portfinder')
  const webpack = require('webpack')
  const webpackConfig = require('../config/webpack')
  const address = require('address')

  portfinder.basePort = webpackConfig.devServer.port

  const hasArgv = name => process.argv.filter(arg => arg === name).length !== 0

  webpackConfig.mode = hasArgv('prod') ? 'production' : 'development'
  const port = await portfinder.getPortPromise()
  const compiler = webpack(webpackConfig, (err, status) => {
    console.log(err, status)
  })
}
