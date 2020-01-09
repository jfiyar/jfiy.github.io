const chalk = require('chalk')

const hasArgv = name => process.argv.filter(arg => arg === name).length !== 0

if (hasArgv('build')) {
  require('./build')()
} else if (hasArgv('serve')) {
  require('./serve')()
} else {
  console.log(chalk.yellow(process.argv.slice(2).join(' ') + ' 参数无法识别'))
}
