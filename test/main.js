// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const KZlog       = require('../index')
    , pack        = require('../package.json')
    , testlib     = require('./int/lib')
    , testhelp    = require('./int/help')
    , testsetm    = require('./int/set')
    , testmethods = require('./int/methods')
    ;


// -- Local Constants
const libname = 'KZlog';


// -- Local Variables


// -- Main
describe('Test KZlog:', () => {
  testlib(KZlog, libname, pack.version, 'without new');
  testhelp(KZlog);
  testsetm(KZlog);
  testmethods(KZlog);
});
