// ESLint declarations:
/* global describe, it */
/* eslint no-console: 0 */


// -- Vendor Modules
import { expect } from 'chai';
import sinon from 'sinon';


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
export default function(KZlog) {
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


// - oOo --
