#!/usr/bin/env node

'use strict';

import opts from 'opts';
// import pjson from '../package.json' assert { type: "json" };
import patamancy from '../index.js';

//******* Command line parsing
var options = [
  // {
  //     short       : 'v',
  //     long        : 'version',
  //     description : 'Show version and exit',
  //     callback    : function () {
  //         console.log(pjson.version);
  //         process.exit(1);
  //     }
  // }
];
var args = [ { name : 'location' , required : false } ];

opts.parse(options, args, true);

var position = opts.arg('location');
// end command line parsing

var options = position ? {position} : {};
try {
  var quote = patamancy.randomQuote(options);
  console.log(quote.quote);
  console.log(quote.position/1000, "%");
  console.log(quote.chapter.join('\n'));
  console.log("https://mmai.github.io/faustrollianae/#/loc/"+quote.position);
} catch (e){
    console.error(e.message);
}
