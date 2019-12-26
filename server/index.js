const chalk = require('chalk')
const portfinder = require('portfinder')
const webpack = require('webpack')
const path = require('path')

async function main() {
  portfinder.basePort = 3000

  let env = process.argv.filter(arg => ['dev', 'prod'].includes(arg))[0] || 'dev'

  const port = await portfinder.getPortPromise()

  console.log(chalk.blue(port, env))

  webpack({
    entry: './src/index.js',
    watch: true,
    devServer: { hot: true },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  }).watch(
    {
      watchOptions: {
        // 不监听的文件和文件夹，支持正则
        ignore: /node_modules/,
        // 监听到变化等待300ms 再去执行文件防止文件更新太快导致编译频繁
        // 默认300ms
        aggregateTimeout: 300,
        // 判断文件是否发生变化是通过不停地询问系统指定文件有没有变化实现的
        poll: 1000,
      },
      // watch:true时有效
      aggregateTimeout: 300,
    },
    (err, stats) => {
      if (err || stats.hasErrors()) {
        console.log(stats)
        console.log('构建过程出错！')
      } else {
        console.log('实时构建成功！')
      }
    }
  )
  // .close(() => {
  //   console.log('服务已关闭')
  // })
}

main()
