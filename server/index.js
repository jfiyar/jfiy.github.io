const chalk = require('chalk')
const portfinder = require('portfinder')
const path = require('path')
const WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')

portfinder.basePort = 3000

let env = process.argv.filter(arg => ['dev', 'prod'].includes(arg))[0] || 'dev'

async function main() {
  const port = await portfinder.getPortPromise()

  console.log(chalk.blue(port, env))

  const webpackConfig = {
    entry: './src/index.js',
    watch: true,
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  }

  const compiler = webpack(webpackConfig)

  const webpackDevServerConfig = { hot: true, contentBase: '/path/to/directory' }

  const server = new WebpackDevServer(compiler, webpackDevServerConfig)

  server.listen(port, 'localhost', () => {})
}

main()
