# excute [![NPM version](https://img.shields.io/npm/v/excute.svg)](https://npmjs.com/package/excute) [![NPM downloads](https://img.shields.io/npm/dm/excute.svg)](https://npmjs.com/package/excute) [![Build Status](https://img.shields.io/circleci/project/egoist/excute/master.svg)](https://circleci.com/gh/egoist/excute)

> Execute any code and get result on your machine.

![preview](https://ooo.0o0.ooo/2016/04/23/571bb04c609b5.png)

## Install

It's **excute** not **execute**!

```bash
$ npm install -g excute
```

## Usage

```bash
# see https://glot.io/account/token
$ excute -t API_TOKEN

# run js code
$ excute try.js

# run swift code
$ excute try.swift -l swift

# run rust code
$ excute try.rs -l rust

# execute a string
$ excute -s "echo $PATH" -l bash
```

For API token, please visit: https://glot.io/account/token<br>
For all supported languages, please visit: https://run.glot.io/languages

## Help

```bash
$ excute -h

  Execute any code and get result on your machine.

  Usage:
    excute <file> -l [language]

  Options:
    -s/--string:        Execute a string instead of a file
    -t/--token:         Set access token, see https://glot.io/account/token
    -l/--language:      Run in specific language, javascript by default
    -p/--pretty:        Pretty print result in a box
    -v/--version:       Print version
    -h/--help:          Print help (You are here!)
```

## License

MIT © [EGOIST](https://github.com/egoist)
