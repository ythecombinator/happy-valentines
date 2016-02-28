<p align="center">
  <a href="">
    <img alt="Logo" src="logo.png" width="600px">
  </a>
</p>

<p align="center">
  Simple module to show your love on this Valentine's Day.
</p>

<p align="center">

  <a href="https://codeship.com/projects/134139"><img alt="Build Status" src="https://codeship.com/projects/e93be640-b5a4-0133-a229-724fe1788ad4/status?branch=master"></a>

  <a href="https://travis-ci.org/mabrasil/happy-valentines"><img alt="Build Status" src="https://travis-ci.org/mabrasil/happy-valentines.svg?branch=master"></a>

  <a href="https://codeclimate.com/github/mabrasil/happy-valentines"><img src="https://codeclimate.com/github/mabrasil/happy-valentines/badges/gpa.svg"></a>

  <a href="https://david-dm.org/mabrasil/happy-valentines" title="Dependency status"><img src="https://david-dm.org/mabrasil/happy-valentines.svg"/></a>

  <a href="https://david-dm.org/mabrasil/happy-valentines#info=devDependencies" title="devDependency status"><img src="https://david-dm.org/mabrasil/happy-valentines/dev-status.svg"/></a>

</p>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [Motivation](#motivation)
- [License](#license)
- [Credits](#credits)

## Installation

### Node

```sh
$ npm install --save happy-valentines
```

### CLI

```sh
$ npm install -g happy-valentines
```

## Usage

<p align="center">
  <a href="">
    <img alt="Screenshot" src="http://i.imgur.com/1OMZr5k.png" width="900px">
  </a>
</p>

> Send this project to whom you **love** and as soon as the person installs and
runs, it will wish that special person a *Happy Valentine's Day*.

### Node

```js
const valentines = require('happy-valentines');

valentines();


/* =>
           LoveLoveLov                eLoveLoveLo
       veLoveLoveLoveLove          LoveLoveLoveLoveLo
    veLoveLoveLoveLoveLoveL      oveLoveLoveLoveLoveLove
   LoveLoveLoveLoveLoveLoveL    oveLoveLoveLoveLoveLoveLo
  veLoveLoveLoveLoveLoveLoveL  oveLoveLoveLoveLoveLoveLove
  LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove
  LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove
   LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLo
   veLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove
   veLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove
     LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLo
      veLoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLove
        LoveLoveLoveLoveLoveLoveLoveLoveLoveLoveLo
          veLoveLoveLoveLoveLoveLoveLoveLoveLove
            LoveLoveLoveLoveLoveLoveLoveLoveLo
              veLoveLoveLoveLoveLoveLoveLove
                LoveLoveLoveLoveLoveLoveLo
                   veLoveLoveLoveLoveLo
                       veLoveLoveLo
                            ve

  Happy Valentine's Day, dear Matheus Brasil.

*/
```

### CLI

![Screenshot](http://i.imgur.com/8wXTrc0.gif)

```sh
$ happy-valentines
```

#### Options

| **Option**  |               **Description**                |
|-------------|----------------------------------------------|
| `--help`    | Shows project description and how to use it. |
| `--version` | Displays the current version.                |

## Development

All the tasks needed for development automation are defined in the
[`package.json`](package.json) *scripts* property and can be run via:

`npm run <command>`

Here is a summary of all the commands:

|  **Command**  |                                     **Description**                                      |
|---------------|------------------------------------------------------------------------------------------|
| `compile`     | Runs the Livescript compiler on the source.                                              |
| `test`        | Runs [Mocha](https://mochajs.org/) in BDD mode.                                          |
| `build`       | Runs both `compile` and `test` commands.                                                 |

## Contributing

Contributions are very welcome! If you'd like to contribute, these
[guidelines](CONTRIBUTING.md) may help you.

## Motivation

You know what they say: *love is in the air*

¯\\\_(ツ)_/¯

## License

[happy-valentines](https://github.com/mabrasil/happy-valentines) is distributed under
the MIT License, available in this repository. All contributions are assumed to
be also licensed under the MIT License.

## Credits

Part of the [*hearts art*](hearts.json) was taken from
[AsciiWorld.com](http://www.asciiworld.com/-Hearts-.html).
