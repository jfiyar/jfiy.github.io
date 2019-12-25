let env = process.argv.filter(arg => ['dev', 'prod'].includes(arg))[0] || 'dev'

console.log(env)
