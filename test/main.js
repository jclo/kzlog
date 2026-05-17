// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */


// -- Vendor Modules


// -- Local Modules
import KZlog from '../index.js';
// import KZlog from '../lib/es6lib.mjs';
import pack from '../package.json' with { type: 'json' };
import testlib from './int/lib.js';
import testhelp from './int/help.js';
import testsetm from './int/set.js';
import testmethods from './int/methods.js';


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


// - oOo --
