'use strict'
const config = require('./config')
const run = require('./run')

module.exports = function (cli) {
  const input = cli.input
  const flags = cli.flags

  if (flags.token) {
    config.set('token', flags.token.trim())
    console.log('done!')
    return
  }

  const file = input[0]
  if (!file && !flags.string) {
    console.log('Please specific a file to run!')
    return
  }
  run(file, flags)
}
