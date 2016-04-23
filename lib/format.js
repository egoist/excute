'use strict'
const chalk = require('chalk')
const boxen = require('boxen')

module.exports = function (data) {
  const box = str => boxen(str, {
    borderStyle: 'double-single',
    borderColor: 'cyan',
    padding: 1
  })

  const res = []
  if (data.stdout.trim()) {
    res.push(chalk.bold('stdout:\n') + box(data.stdout.trim()))
  }
  if (data.stderr.trim()) {
    res.push(chalk.bold('stderr:\n') + box(data.stderr.trim()))
  }
  if (data.error.trim()) {
    res.push(chalk.bold('error:\n') + box(data.error.trim()))
  }

  return res.join('\n')
}
