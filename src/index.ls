'use strict'

require! {
  fs
  path
  'iniparser': parser
  'chalk': colors
  'unique-random-array'
  './hearts.json': hearts
}

module.exports = ->

  homeDir = if process.platform is \win32
            then process.env.USERPROFILE
            else process.env.HOME
            or process.env.HOMEPATH

  git-config-file = path.join homeDir, \.gitconfig

  user =    if fs.existsSync git-config-file
            then (parser.parseSync git-config-file).user.name
            else 'My Anonymous Beloved'

  heart = uniqueRandomArray hearts

  (colors.red '\n' + heart!.join '') + colors.gray '\n Happy Valentine\'s Day, dear ' + colors.red user + colors.gray '.'
