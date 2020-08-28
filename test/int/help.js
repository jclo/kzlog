// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    , sinon      = require('sinon')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(KZlog) {
  describe('Test KZlog help method:', () => {
    const log = KZlog();

    it('Expects Logger.help() to return a string.', () => {
      const sandbox = sinon.createSandbox();
      sandbox.stub(console, 'log');
      log.help();
      expect(console.log.calledOnce).to.be.equal(true);
      expect(console.log.calledWith(sinon.match(/Prints a log message formatted as/))).to.be.equal(true);
      sandbox.restore();
    });
  });
};
