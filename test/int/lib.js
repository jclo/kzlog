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
module.exports = function(KZlog, libname, version) {
  describe('KZlog introspection:', () => {
    describe('Test the nature of KZlog:', () => {
      it('Expects KZlog to be a function.', () => {
        expect(KZlog).to.be.a('function');
      });

      it('Expects KZlog to own 4 custom properties.', () => {
        expect(Object.keys(KZlog)).to.be.an('array').that.has.lengthOf(4);
      });

      describe('Check the owned generic custom properties:', () => {
        it(`Expects KZlog to own the property "NAME" whose value is "${libname}".`, () => {
          expect(KZlog).to.own.property('NAME').that.is.equal(libname);
        });

        it(`Expects KZlog to own the property "VERSION" whose value is "${version}".`, () => {
          expect(KZlog).to.own.property('VERSION');
        });

        it('Expects KZlog to own the property "_setTestMode" that is a function.', () => {
          expect(KZlog).to.own.property('_setTestMode').that.is.a('function');
        });

        it('Expects KZlog to own the property "noConflict" that is a function.', () => {
          expect(KZlog).to.own.property('noConflict').that.is.a('function');
        });

        describe('Test the owned generic custom properties:', () => {
          it('Expects the property "_setTestMode" to return an array with 0 item.', () => {
            expect(KZlog._setTestMode()).to.be.an('array').that.has.lengthOf(0);
          });

          it('Expects the property "noConflict" to return a function.', () => {
            expect(KZlog.noConflict()).to.be.a('function');
          });
        });
      });
    });

    describe('Test KZlog constructor:', () => {
      const o = KZlog();
      const op = Object.getOwnPropertyNames(o);
      const io = Object.keys(Object.getPrototypeOf(o));

      it('Expects the function KZlog to return an object.', () => {
        expect(o).to.be.an('object');
      });

      it('Expects KZlog object to own 4 properties.', () => {
        expect(op).to.be.an('array').that.has.lengthOf(4);
      });

      it('Expects KZlog object to inherit 11 properties.', () => {
        expect(io).to.be.an('array').that.has.lengthOf(11);
      });

      describe('Check the owned generic properties:', () => {
        it('Expects KZlog object to own the property "_library" that is an object.', () => {
          expect(o).to.own.property('_library').that.is.an('object');
        });

        describe('Test the owned generic properties:', () => {
          it('Expects the property "_library" to own two properties.', () => {
            expect(Object.keys(o.whoami())).to.be.an('array').that.has.lengthOf(2);
          });
          it(`Expects the property "_library" to own the property "name" whose value is "${libname}".`, () => {
            expect(o.whoami()).to.own.property('name').that.is.equal(libname);
          });
          it(`Expects the property "_library" to own the property "version" whose value is "${version}".`, () => {
            expect(o.whoami()).to.own.property('version').that.is.equal(version);
          });
        });
      });

      describe('Check the inherited generic properties:', () => {
        it('Expects KZlog object to inherit the property "whoami" that is a function.', () => {
          expect(o).to.have.property('whoami').that.is.a('function');
        });

        describe('Test the inherited generic properties:', () => {
          it('Expects the property "whoami" to return an object.', () => {
            expect(o.whoami()).to.be.an('object');
          });
          it('Expects this object to own two properties.', () => {
            expect(Object.keys(o.whoami())).to.be.an('array').that.has.lengthOf(2);
          });
          it(`Expects this object to own the property "name" whose value is "${libname}".`, () => {
            expect(o.whoami()).to.own.property('name').that.is.equal(libname);
          });
          it(`Expects this object to own the property "version" whose value is "${version}".`, () => {
            expect(o.whoami()).to.own.property('version').that.is.equal(version);
          });
        });
      });

      describe('Check the owned specific properties:', () => {
        it('Expects KZlog object to own the property "name" that is a string.', () => {
          expect(o).to.own.property('name').that.is.a('string');
        });

        it('Expects KZlog object to own the property "level" that is a string.', () => {
          expect(o).to.own.property('level').that.is.a('string');
        });

        it('Expects KZlog object to own the property "highlight" that is a boolean.', () => {
          expect(o).to.own.property('highlight').that.is.a('boolean');
        });

        describe('Test the owned specific properties:', () => {
          it('Expects ...', () => {
            expect(true).to.be.equal(true);
          });
        });
      });

      describe('Check the inherited specific properties:', () => {
        it('Expects KZlog object to inherit the property "help" that is a function.', () => {
          expect(o).to.have.property('help').that.is.a('function');
        });

        it('Expects KZlog object to inherit the property "setName" that is a function.', () => {
          expect(o).to.have.property('setName').that.is.a('function');
        });

        it('Expects KZlog object to inherit the property "setLevel" that is a function.', () => {
          expect(o).to.have.property('setLevel').that.is.a('function');
        });

        it('Expects KZlog object to inherit the property "setHighlight" that is a function.', () => {
          expect(o).to.have.property('setHighlight').that.is.a('function');
        });

        it('Expects KZlog object to inherit the property "trace" that is a function.', () => {
          expect(o).to.have.property('trace').that.is.a('function');
        });

        it('Expects KZlog object to inherit the property "debug" that is a function.', () => {
          expect(o).to.have.property('debug').that.is.a('function');
        });

        it('Expects KZlog object to inherit the property "info" that is a function.', () => {
          expect(o).to.have.property('info').that.is.a('function');
        });

        it('Expects KZlog object to inherit the property "warn" that is a function.', () => {
          expect(o).to.have.property('warn').that.is.a('function');
        });

        it('Expects KZlog object to inherit the property "error" that is a function.', () => {
          expect(o).to.have.property('error').that.is.a('function');
        });

        it('Expects KZlog object to inherit the property "fatal" that is a function.', () => {
          expect(o).to.have.property('fatal').that.is.a('function');
        });

        describe('Test the inherited specific properties:', () => {
          //
        });
      });
    });
  });
};
