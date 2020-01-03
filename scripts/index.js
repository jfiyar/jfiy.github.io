const chalk = require('chalk')
const portfinder = require('portfinder')
const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack')
const address = require('address')

portfinder.basePort = webpackConfig.devServer.port

const argvHas = name => process.argv.filter(arg => arg === name).length !== 0

webpackConfig.mode = argvHas('prod') ? 'production' : 'development'

const isBuild = argvHas('build')

async function main() {
  const port = await portfinder.getPortPromise()
  const compiler = webpack(webpackConfig)
  webpackConfig.devServer.after = () => {
    if (typeof webpackConfig.devServer === 'function') {
      webpackConfig.devServer()
    }
    setTimeout(() => {
      console.log(`${chalk.blue('\ni')}${chalk.blackBright('[scripts]')}server at:`)
      console.log(
        chalk.blue(`
          http://localhost:${port}
          http://127.0.0.1:${port}
          http://${address.ip()}:${port}
      `)
      )
    })
  }
  const server = new WebpackDevServer(compiler, webpackConfig.devServer)
  server.listen(port, '0.0.0.0')
}

main()
