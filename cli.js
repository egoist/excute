#!/usr/bin/env node
'use strict'
const meow = require('meow')
const update = require('update-notifier')
const main = require('./lib')

const cli = meow(`
  Usage:
    excute <file> -l [language]

  Options:
    -t/--token:         Set access token, see https://glot.io/account/token
    -l/--language:      Run in specific language, javascript by default
    -v/--version:       Print version
    -h/--help:          Print help (You are here!)
`, {
  alias: {
    l: 'language',
    v: 'version',
    h: 'help',
    t: 'token'
  }
})

update({pkg: cli.pkg}).notify()

main(cli)
