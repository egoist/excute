'use strict'
const fetch = require('axios')

module.exports = function (token) {
  const instance = fetch.create({
    baseURL: 'https://run.glot.io/languages',
    headers: {
      common: {
        Authorization: `Token ${token}`
      }
    }
  })

  return instance
}
