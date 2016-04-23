'use strict'
const Fs = require('fs')
const config = require('./config')
const api = require('./api')
const format = require('./format')

module.exports = function (file, options) {
  const token = config.get('token')
  if (!token) {
    console.log('Use `excute -t YOUR_TOKEN` to set api token first')
    return
  }

  const content = Fs.readFileSync(file, 'utf8')
  const language = options.language || 'javascript'
  api(token).post(`/${language}/latest`, {
    files: [
      {
        name: file,
        content
      }
    ]
  })
  .then(res => console.log(format(res.data)))
  .catch(e => console.log(e.statusText))
}
