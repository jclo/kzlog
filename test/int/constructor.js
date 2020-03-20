// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(KZlog) {
  describe('Test KZlog:', () => {
    it('Expects KZlog.VERSION to return a string.', () => {
      expect(KZlog.VERSION).to.be.a('string');
    });

    it('Expects KZlog.noConflict to return a function.', () => {
      expect(KZlog.noConflict).to.be.a('function');
    });

    it('Expects KZlog.noConflict() to return a function.', () => {
      expect(KZlog.noConflict()).to.be.a('function');
    });
  });

  describe('Test the constructor:', () => {
    const log = KZlog();

    it('Expects KZlog() to return an object.', () => {
      expect(log).to.be.an('object');
    });

    it('Expects this object to own the property "help".', () => {
      expect(log).to.have.property('help');
    });

    it('Expects this object to own the property "version".', () => {
      expect(log).to.have.property('version');
    });

    it('Expects this object to own the property "setName".', () => {
      expect(log).to.have.property('setName');
    });

    it('Expects this object to own the property "setLevel".', () => {
      expect(log).to.have.property('setLevel');
    });

    it('Expects this object to own the property "setHighlight".', () => {
      expect(log).to.have.property('setHighlight');
    });

    it('Expects this object to own the property "trace".', () => {
      expect(log).to.have.property('trace');
    });

    it('Expects this object to own the property "debug".', () => {
      expect(log).to.have.property('debug');
    });

    it('Expects this object to own the property "info".', () => {
      expect(log).to.have.property('info');
    });

    it('Expects this object to own the property "warn".', () => {
      expect(log).to.have.property('warn');
    });

    it('Expects this object to own the property "error".', () => {
      expect(log).to.have.property('error');
    });

    it('Expects this object to own the property "fatal".', () => {
      expect(log).to.have.property('fatal');
    });
  });
};
