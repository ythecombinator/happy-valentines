'use strict'

require! {
  fs
  path
  'iniparser': parser
  'chalk': colors
  'unique-random-array'
  'fullname'
  './hearts.json': hearts
}

module.exports = ->

  heart = unique-random-array hearts

  console.log colors.red '\n' + heart!.join ''
  console.log colors.gray '\n Happy Valentine\'s Day, dear '
  fullname!then ((name) -> console.log (colors.red name) + (colors.gray '.'))
