// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-expressions: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(KZlog) {
  describe('Test KZlog methods setName, setLevel, setHighlight:', () => {
    describe('Test the properties name, level and highlight:', () => {
      const log = KZlog();

      it('Expects KZlog() to return an object.', () => {
        expect(log).to.be.an('object');
      });

      it('Expects this object to own the property "name".', () => {
        expect(log).to.have.property('name');
      });

      it('Expects the property name to be equal to "unknown!".', () => {
        expect(log.name).to.be.equal('unknown!');
      });

      it('Expects this object to own the property "level".', () => {
        expect(log).to.have.property('level');
      });

      it('Expects the property level to be equal to "trace".', () => {
        expect(log.level).to.be.equal('trace');
      });

      it('Expects this object to own the property "highlight".', () => {
        expect(log).to.have.property('highlight');
      });

      it('Expects the property highlight to be equal to true.', () => {
        expect(log.highlight).to.be.true;
      });


      describe('Test the method setName:', () => {
        it('Expects log.setName() to set name to "unknown!".', () => {
          log.setName();
          expect(log.name).to.be.equal('unknown!');
        });

        it('Expects log.setName("aaa") to set name to "aaa".', () => {
          log.setName('aaa');
          expect(log.name).to.be.equal('aaa');
        });
      });

      describe('Test the method setLevel:', () => {
        it('Expects log.setLevel() to set level to "trace".', () => {
          log.setLevel();
          expect(log.level).to.be.equal('trace');
        });

        it('Expects log.setLevel("warn") to set level to "warn".', () => {
          log.setLevel('warn');
          expect(log.level).to.be.equal('warn');
        });
      });

      describe('Test the method setHighlight:', () => {
        it('Expects Logger.setHighlight(false) to set highlight to false.', () => {
          log.setHighlight(false);
          expect(log.highlight).to.be.false;
        });
      });
    });
  });
};
