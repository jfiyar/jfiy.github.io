const chalk = require('chalk')
const portfinder = require('portfinder')
const path = require('path')
const WebpackDevServer = require('webpack-dev-server')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

portfinder.basePort = 3000

let env = process.argv.filter(arg => ['dev', 'prod'].includes(arg))[0] || 'dev'

async function main() {
  const port = await portfinder.getPortPromise()
  const compiler = webpack({
    entry: './src/index.jsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        inject: 'body',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 1, modules: true },
            },
            'less-loader',
          ],
        },
        {
          test: /\.js(x)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx'],
    },
  })

  const server = new WebpackDevServer(compiler, { hot: true, contentBase: '/path/to/directory' })

  server.listen(port, 'localhost', () => {})
}

main()
