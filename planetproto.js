#!/usr/bin/env node

const workshopper = require('workshopper'),
	path        = require('path'),
	credits     = require('./credits'),
	menu        = require('./exercises/menu'),
	name        = 'planetproto',
	title       = 'Understanding JavaScript prototypes',
	subtitle    = '\x1b[23mSelect an exercise and hit \x1b[3mEnter\x1b[23m to begin'


function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
	name        : name,
	title       : title
  , subtitle    : subtitle
  , exerciseDir : fpath('./exercises/')
  , appDir      : __dirname
  , helpFile    : fpath('help.txt')
  , languages   : [ 'en', 'fr' ]
  , menuItems   : [ {
        name    : 'credits'
      , handler : credits
    } ]
})
