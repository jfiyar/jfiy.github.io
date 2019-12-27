const chalk = require('chalk')
const portfinder = require('portfinder')
const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack')

portfinder.basePort = webpackConfig.devServer.port

const argvHas = name => process.argv.filter(arg => arg === name).length !== 0

webpackConfig.mode = argvHas('prod') ? 'production' : 'development'

const isBuild = argvHas('build')

async function main() {
  const port = await portfinder.getPortPromise()
  const compiler = webpack(webpackConfig)
  const server = new WebpackDevServer(compiler, webpackConfig.devServer)
  server.listen(port, 'localhost', () => {})
}

main()
