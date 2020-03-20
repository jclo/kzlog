// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const KZlog = require('../index.js')
    , constructor = require('./int/constructor.js')
    , helpversion = require('./int/helpversion.js')
    , set = require('./int/set.js')
    , methods = require('./int/methods.js')
    ;


// -- Local Constants


// -- Local Variables


// -- Main
describe('Test KZlog:', () => {
  constructor(KZlog);
  helpversion(KZlog);
  set(KZlog);
  methods(KZlog);
});
