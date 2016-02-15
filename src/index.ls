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

  home-dir = if process.platform is \win32
            then process.env.USERPROFILE
            else process.env.HOME or process.env.HOMEPATH

  git-config-file = path.join home-dir, \.gitconfig

  user = if fs.exists-sync git-config-file
         then (.user.name) (parser.parse-sync git-config-file)
         else 'My Anonymous Beloved'

  heart = unique-random-array hearts

  (colors.red '\n' + heart!.join '') + colors.gray '\n Happy Valentine\'s Day, dear ' + colors.red user + colors.gray '.'
