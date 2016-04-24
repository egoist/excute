'use strict'
const Fs = require('fs')
const Ora = require('ora')
const config = require('./config')
const api = require('./api')
const format = require('./format')
const _ = require('./utils')

module.exports = function (file, options) {
  const token = config.get('token')
  if (!token) {
    console.log('Use `excute -t YOUR_TOKEN` to set api token first')
    return
  }

  const spin = new Ora()

  const content = options.string || Fs.readFileSync(file, 'utf8')
  const language = options.language || 'javascript'

  spin.start()
  api(token).post(`/${language}/latest`, {
    files: [
      {
        name: file || `untitled${_.getExt(options.language)}`,
        content
      }
    ]
  })
  .then(res => {
    spin.stop()
    const output = format(res.data, options.pretty)
    console.log(output.trim() ? `\n${output}\n` : '')
  })
  .catch(e => {
    spin.stop()
    console.log(e.statusText)
  })
}
