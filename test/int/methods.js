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
  describe('Test the log methods:', () => {
    describe('Test the method log.trace():', () => {
      const log = KZlog('aaa', 'trace', true);

      it('Expects log.trace("message") to return an object.', () => {
        expect(log.trace('message')).to.be.an('object');
      });

      it('Expects log.trace("message") to print a message that contains "message".', () => {
        const sandbox = sinon.createSandbox();
        sandbox.stub(console, 'log');
        log.trace('message');
        expect(console.log.calledWith(sinon.match(/aaa/))).to.be.true;
        expect(console.log.calledWith(sinon.match(/message/))).to.be.true;
        sandbox.restore();
      });
    });

    describe('Test the method log.debug():', () => {
      const log = KZlog();

      it('Expects log.debug("message") to return an object.', () => {
        const sandbox = sinon.createSandbox();
        sandbox.stub(console, 'log');
        expect(log.debug('message')).to.be.an('object');
        sandbox.restore();
      });
    });

    describe('Test the method log.info():', () => {
      const log = KZlog();

      it('Expects log.info("message") to return an object.', () => {
        const sandbox = sinon.createSandbox();
        sandbox.stub(console, 'log');
        expect(log.info('message')).to.be.an('object');
        sandbox.restore();
      });
    });

    describe('Test the method log.warn():', () => {
      const log = KZlog();

      it('Expects log.warn("message") to return an object.', () => {
        const sandbox = sinon.createSandbox();
        sandbox.stub(console, 'log');
        expect(log.warn('message')).to.be.an('object');
        sandbox.restore();
      });
    });

    describe('Test the method log.error():', () => {
      const log = KZlog();

      it('Expects log.error("message") to return an object.', () => {
        const sandbox = sinon.createSandbox();
        sandbox.stub(console, 'log');
        expect(log.error('message')).to.be.an('object');
        sandbox.restore();
      });
    });

    describe('Test the method log.fatal():', () => {
      const log = KZlog();

      it('Expects log.fatal("message") to return an object.', () => {
        const sandbox = sinon.createSandbox();
        sandbox.stub(console, 'log');
        expect(log.fatal('message')).to.be.an('object');
        sandbox.restore();
      });
    });
  });
};
