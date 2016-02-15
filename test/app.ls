'use strict'

require! {
  '../src/index.ls': valentines
  '../hearts.json': hearts
  'chai': {expect}
}

describe "Happy Valentine's Testing Specifications" ->

  specify 'Used hearts should be in a valid array' ->
    expect hearts .to.be instanceof Array

  specify 'Each heart should have a valid size' ->
    expect hearts.0.length .to.be.above 10
