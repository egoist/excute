'use strict'
const chalk = require('chalk')
const boxen = require('boxen')

module.exports = function (data, pretty) {
  const box = str => pretty
    ? boxen(str, {
      borderStyle: 'double-single',
      borderColor: 'cyan',
      padding: 1
    })
    : str

  const res = []
  if (data.stdout.trim()) {
    res.push(chalk.bold.underline.green('stdout:\n') + box(data.stdout.trim()))
  }
  if (data.stderr.trim()) {
    res.push(chalk.bold.underline.red('stderr:\n') + box(data.stderr.trim()))
  }
  if (data.error.trim()) {
    res.push(chalk.bold.underline.red('error:\n') + box(data.error.trim()))
  }

  return res.join('\n\n')
}
