'use strict';
var fs, path, parser, colors, uniqueRandomArray, fullname, hearts;
fs = require('fs');
path = require('path');
parser = require('iniparser');
colors = require('chalk');
uniqueRandomArray = require('unique-random-array');
fullname = require('fullname');
hearts = require('./hearts.json');
module.exports = function(){
  var heart;
  heart = uniqueRandomArray(hearts);
  console.log(colors.red('\n' + heart().join('')));
  console.log(colors.gray('\n Happy Valentine\'s Day, dear '));
  return fullname().then(function(name){
    return console.log(colors.red(name) + colors.gray('.'));
  });
};