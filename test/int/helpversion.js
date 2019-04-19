// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-expressions: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    , sinon      = require('sinon')
    ;


// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(KZlog) {
  describe('Test KZlog methods help and version:', () => {
    const log = KZlog();

    it('Expects Logger.help() to return a string.', () => {
      const sandbox = sinon.createSandbox();
      sandbox.stub(console, 'log');
      log.help();
      expect(console.log.calledOnce).to.be.true;
      expect(console.log.calledWith(sinon.match(/Prints a log message formatted as/))).to.be.true;
      sandbox.restore();
    });

    it('Expects Logger.version() to return a string.', () => {
      expect(log.version()).to.be.a('string');
    });
  });
};
