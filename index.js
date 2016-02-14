'use strict';
var fs, path, parser, colors, uniqueRandomArray, hearts;
fs = require('fs');
path = require('path');
parser = require('iniparser');
colors = require('chalk');
uniqueRandomArray = require('unique-random-array');
hearts = require('./hearts.json');
module.exports = function(){
  var homeDir, gitConfigFile, user, heart;
  homeDir = process.platform === 'win32'
    ? process.env.USERPROFILE
    : process.env.HOME || process.env.HOMEPATH;
  gitConfigFile = path.join(homeDir, '.gitconfig');
  user = fs.existsSync(gitConfigFile) ? parser.parseSync(gitConfigFile).user.name : 'My Anonymous Beloved';
  heart = uniqueRandomArray(hearts);
  return colors.red('\n' + heart().join('')) + colors.gray('\n Happy Valentine\'s Day, dear ' + colors.red(user + colors.gray('.')));
};