#!/usr/bin/env node
'use strict';
var meow, valentines, cli;
meow = require('meow');
valentines = require('./');
cli = meow({
  help: ['', 'Happy Valentine\'s Day!', '', 'How about wishing someone special a Happy Valentine\'s Day as well?', '', 'Options:', '  --help  Guess what? It brings you here.', '  --version  Displays the current version.', '', 'Example:', '  $ happy-valentines', '', '         LoveLoveLov                eLoveLoveLo', '     veLoveLoveLoveLove          LoveLoveLoveLoveLo', '  veLoveLoveLoveLoveLoveL      oveLoveLoveLoveLoveLove', ' LoveLoveLoveLoveLoveLoveL    oveLoveLoveLoveLoveLoveLo', 'veLoveLoveLoveLoveLoveLoveL  oveLoveLoveLoveLoveLoveLove', 'LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove', 'LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove', ' LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLo', ' veLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove', ' veLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove', '   LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLo', '    veLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove', '      LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLo', '        veLoveLoveLoveLoveLoveLoveLoveLoveLove', '          LoveLoveLoveLoveLoveLoveLoveLoveLo', '            veLoveLoveLoveLoveLoveLoveLove', '              LoveLoveLoveLoveLoveLoveLo', '                 veLoveLoveLoveLoveLo', '                     veLoveLoveLo', '                         ve', '', 'Happy Valentine\'s Day, dear Matheus Brasil.', '']
});
valentines();