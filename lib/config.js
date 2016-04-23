'use strict'
const Config = require('configstore')
const pkg = require('../package')

module.exports = new Config({name: pkg.name})
