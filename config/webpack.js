const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
    }),
  ],
  devServer: { hot: true, port: 3000, quiet: true, contentBase: false },

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
}
