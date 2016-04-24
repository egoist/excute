'use strict'

const _ = module.exports = {}

_.getExt = function (language) {
  switch (language) {
    case 'assembly':
      return '.s'
    case 'base':
      return '.sh'
    case 'clojure':
      return '.clj'
    case 'coffeescript':
      return '.coffee'
    case 'csharp':
      return '.cs'
    case 'elixir':
      return '.exs'
    case 'erlang':
      return '.erl'
    case 'fsharp':
      return '.fs'
    case 'python':
      return '.py'
    case 'ruby':
      return '.rb'
    default:
      return language ? `.${language}` : '.js'
  }
}
