// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

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

    it('Expects KZlog._setTestMode to return a function.', () => {
      expect(KZlog._setTestMode).to.be.a('function');
    });

    it('Expects KZlog._setTestMode() to return an empty array.', () => {
      expect(KZlog._setTestMode()).to.be.an('array').that.has.lengthOf(0);
    });

    it('Expects KZlog.noConflict() to return a function.', () => {
      expect(KZlog.noConflict()).to.be.a('function');
    });
  });

  describe('Test the constructor:', () => {
    const log = KZlog();
    const oprops = Object.getOwnPropertyNames(log);
    const iprops = Object.getOwnPropertyNames(Object.getPrototypeOf(log));

    it('Expects KZlog() to return an object.', () => {
      expect(log).to.be.an('object');
    });

    it('Expects this object to own 4 properties.', () => {
      expect(oprops).to.be.an('array').that.has.lengthOf(4);
    });

    it('Expects this object to own the property "library".', () => {
      expect(log).to.own.property('library');
    });

    it('Expects this object to own the property "name".', () => {
      expect(log).to.own.property('name');
    });

    it('Expects this object to own the property "level".', () => {
      expect(log).to.own.property('level');
    });

    it('Expects this object to own the property "highlight".', () => {
      expect(log).to.own.property('highlight');
    });

    it('Expects KZlog() to inherit of 11 properties.', () => {
      expect(iprops).to.be.an('array').that.has.lengthOf(11);
    });

    it('Expects KZlog() to inherit of the property "help" that is a function.', () => {
      expect(log).to.have.property('help').that.is.a('function');
    });

    it('Expects KZlog() to inherit of the property "version" that is a function.', () => {
      expect(log).to.have.property('version').that.is.a('function');
    });

    it('Expects KZlog() to inherit of the property "setName" that is a function.', () => {
      expect(log).to.have.property('setName').that.is.a('function');
    });

    it('Expects KZlog() to inherit of the property "setLevel" that is a function.', () => {
      expect(log).to.have.property('setLevel').that.is.a('function');
    });

    it('Expects KZlog() to inherit of the property "setHighlight" that is a function.', () => {
      expect(log).to.have.property('setHighlight').that.is.a('function');
    });

    it('Expects KZlog() to inherit of the property "trace" that is a function.', () => {
      expect(log).to.have.property('trace').that.is.a('function');
    });

    it('Expects KZlog() to inherit of the property "debug" that is a function.', () => {
      expect(log).to.have.property('debug').that.is.a('function');
    });

    it('Expects KZlog() to inherit of the property "info" that is a function.', () => {
      expect(log).to.have.property('info').that.is.a('function');
    });

    it('Expects KZlog() to inherit of the property "warn" that is a function.', () => {
      expect(log).to.have.property('warn').that.is.a('function');
    });

    it('Expects KZlog() to inherit of the property "error" that is a function.', () => {
      expect(log).to.have.property('error').that.is.a('function');
    });

    it('Expects KZlog() to inherit of the property "fatal" that is a function.', () => {
      expect(log).to.have.property('fatal').that.is.a('function');
    });
  });
};
