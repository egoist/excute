#!/usr/bin/env node
'use strict'
const meow = require('meow')
const update = require('update-notifier')
const main = require('./lib')

const cli = meow(`
  Usage:
    excute <file> -l [language]

  Options:
    -s/--string:        Execute a string instead of a file
    -t/--token:         Set access token, see https://glot.io/account/token
    -l/--language:      Run in specific language, javascript by default
    -p/--pretty:        Pretty print result in a box
    -v/--version:       Print version
    -h/--help:          Print help (You are here!)
`, {
  alias: {
    l: 'language',
    v: 'version',
    h: 'help',
    t: 'token',
    s: 'string',
    p: pretty
  },
  string: ['string', 'token', 'language']
})

update({pkg: cli.pkg}).notify()

main(cli)
