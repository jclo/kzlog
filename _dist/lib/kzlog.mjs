/*! ****************************************************************************
 * KZlog v1.0.3
 *
 * A minimal lightweight logging library for JavaScript.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2024 Mobilabs <contact@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * Built from ES6lib v2.1.1.
 * ************************************************************************** */
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
const $__ES6GLOB = {};
(function(root, factory) {
  'use strict';

  /* c8 ignore start */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.KZlog = factory(root);
  }
  /* c8 ignore stop */
}($__ES6GLOB, (root) => {
  'use strict';

  /** **************************************************************************
   * _head provides the list of the constants that are defined at the global
   * level of this module and are accessible to all. So, they are considered
   * as reserved words for this library.
   * ************************************************************************ */
  /* eslint-disable one-var, no-unused-vars, semi-style */

  let KZlog
    ;

  // Tree is an internal object that links all the internal modules.
  let LG = {};

  /* eslint-enable one-var, no-unused-vars, semi-style */

  /** **************************************************************************
   *
   * A lightweight logging library for JavaScript.
   *
   * kzlog.js is built upon the Prototypal Instantiation pattern. It
   * returns an object by calling its constructor. It doesn't use the new
   * keyword.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Constructor:
   *  . KZlog                       creates and returns the KZlog object,
   *
   *
   * Private Static Methods:
   *  . _setTestMode                returns internal objects for testing purpose,
   *
   *
   * Public Static Methods:
   *  . noConflict                  returns a reference to this KZlog object,
   *
   *
   * Public Methods:
   *  . whoami                      returns the library name and version,
   *  . help                        dumps, to the console, the on-line help,
   *  . setName                     updates the name of the module/library,
   *  . setLevel                    updates the threshold level,
   *  . setHighlight                updates the highlight mode,
   *  . trace                       dumps a trace message,
   *  . debug                       dumps a debug message,
   *  . info                        dumps a info message,
   *  . warn                        dumps a warn message,
   *  . error                       dumps a error message,
   *  . fatal                       dumps a fatal message,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // START OF IIFE


    // -- Module Path


    // -- Local Modules


    // -- Local Constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousKZlog = root.KZlog
        ;


    // -- Local Variables
    let methods
      ;


    // -- Public ---------------------------------------------------------------

    /**
     * Returns the KZlog object.
     * (Prototypal Instantiation Pattern)
     *
     * @constructor (arg1, arg2, arg3)
     * @public
     * @param {String}        the name of the module/library to be printed,
     * @param {String}        the log level threshold,
     * @param {Boolean}       the highlight mode (true: color, false: B&W),
     * @returns {Object}      returns the KZlog object,
     * @since 0.0.0
     */
    KZlog = function(name, level, highlight) {
      const obj = Object.create(methods);
      obj._library = {
        name: 'KZlog',
        version: '1.0.3',
      };
      obj.name = name || 'unknown!';
      obj.level = level || 'trace';
      obj.highlight = highlight !== false;
      return obj;
    };

    // Attaches constants to KZlog that provide name and version of the lib.
    KZlog.NAME = 'KZlog';
    KZlog.VERSION = '1.0.3';


    // -- Private Static Methods -----------------------------------------------

    /**
     * Returns the internal objects for testing purpose.
     * (must not be deleted)
     *
     * @method ()
     * @private
     * @param {}              -,
     * @returns {Object}      returns a list of internal objects,
     * @since 0.0.0
     */
    KZlog._setTestMode = function() {
      return [];
    };


    // -- Public Static Methods ------------------------------------------------

    /**
     * Returns a reference to this KZlog object.
     * (must not be deleted)
     *
     * Nota:
     * Running KZlog in noConflict mode, returns the KZlog variable to its
     * _ previous owner.
     *
     * @method ()
     * @public
     * @param {}              -,
     * @returns {Object}      returns the KZlog object,
     * @since 0.0.0
     */
    KZlog.noConflict = function() {
      /* eslint-disable-next-line no-param-reassign */
      root.KZlog = previousKZlog;
      return this;
    };


    // -- Public Methods -------------------------------------------------------

    methods = {

      /**
       * Returns the library name and version.
       * (must not be deleted)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the library name and version,
       * @since 0.0.0
       */
      whoami() {
        return this._library;
      },

      /**
       * Dumps, to the console, the on-line help.
       *
       * @function ()
       * @public
       * @param {}            -,
       * @returns {}          -,
       * @since 0.0.0
       */
      help() {
        const help = ['',
          'Prints a log message formatted as: [year-month-day] [level] name message,',
          'Methods:',
          '  help(): print this message,',
          '  version(): return the version number,',
          '  setName(name): set the name',
          '  setLevel(level): set the level',
          '  setHighlight()highlight: set the highlight mode',
          '  trace(msg): print the trace message,',
          '  debug(msg): print the debug message,',
          '  info(msg): print the info message,',
          '  warn(msg): print the warn message,',
          '  error(msg): print the error message,',
          '  fatal(msg): print the fatal message,',
          '',
        ].join('\n');

        /* eslint-disable-next-line no-console */
        console.log(help);
      },

      /**
       * Updates the name of the module/library.
       *
       * @function (arg1)
       * @public
       * @param {String}      the name of the library running the KZlog,

       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      setName(name) {
        this.name = name || 'unknown!';
        return this;
      },

      /**
       * Updates the the threshold level.
       *
       * @function (arg1)
       * @public
       * @param {String}      the the threshold level,

       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      setLevel(level) {
        this.level = level || 'trace';
        return this;
      },

      /**
       * Updates the the highlight mode.
       *
       * @function (arg1)
       * @public
       * @param {Boolean}     the the highlight mode,

       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      setHighlight(highlight) {
        this.highlight = highlight !== false;
        return this;
      },

      /**
       * Dumps a trace message.
       *
       * @function (arg1)
       * @public
       * @param {String}      the message,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      trace(msg) {
        LG.print(this, msg, 'trace');
        return this;
      },

      /**
       * Dumps a debug message.
       *
       * @function (arg1)
       * @public
       * @param {String}      the message,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      debug(msg) {
        LG.print(this, msg, 'debug');
        return this;
      },

      /**
       * Dumps an info message.
       *
       * @function (arg1)
       * @public
       * @param {String}      the message,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      info(msg) {
        LG.print(this, msg, 'info');
        return this;
      },

      /**
       * Dumps an warn message.
       *
       * @function (arg1)
       * @public
       * @param {String}      the message,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      warn(msg) {
        LG.print(this, msg, 'warn');
        return this;
      },

      /**
       * Dumps an error message.
       *
       * @function (arg1)
       * @public
       * @param {String}      the message,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      error(msg) {
        LG.print(this, msg, 'error');
        return this;
      },

      /**
       * Dumps a fatal message.
       *
       * @function (arg1)
       * @public
       * @param {String}      the message,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      fatal(msg) {
        LG.print(this, msg, 'fatal');
        return this;
      },
    };

    // END OF IIFE
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */

  /** **************************************************************************
   *
   * Implements the functions used by KZlog.
   *
   * log.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . _default                    returns the default level,
   *  . _levels                     returns the defined levels,
   *
   *
   * Public Static Methods:
   *  . print                       dumps, to the console, the logging message,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // START OF IIFE


    // -- Module Path


    // -- Local Modules


    // -- Local Constants
    const DEFAULT_LEVEL = 'trace'
        , LEVELS = ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'off']
        ;


    // -- Local Variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Returns the default level.
     *
     * @function ()
     * @private
     * @param {}              -,
     * @returns {Array}       returns the default level,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    function _default() {
      return DEFAULT_LEVEL;
    }

    /**
     * Returns the defined levels.
     *
     * @function ()
     * @private
     * @param {}              -,
     * @returns {Array}       returns the defined levels,
     * @since 0.0.0
     */
    function _levels() {
      return LEVELS;
    }


    // -- Public Static Methods ------------------------------------------------

    LG = {

      /**
       * Dumps, to the console, the logging message.
       *
       * @method (arg1, arg2)
       * @public
       * @param {Object}    the log object,
       * @param {String}    the message to print,
       * @param {String}    the level of the message,
       * @returns {}        -,
       * @since 0.0.0
       */
      /* eslint-disable no-param-reassign, no-console */
      print(log, msg, currentlevel) {
        const levels = _levels()
            , colors = [32, 36, 34, 33, 35, 31, 0]
            , date   = new Date()
            ;

        let stringDate = `[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}  `;
        stringDate += `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
        stringDate += ']';

        if (!log.level) {
          /* istanbul ignore next */
          log.level = _default();
        }

        if (log.highlight === undefined) {
          /* istanbul ignore next */
          log.highlight = true;
        }

        let message;
        if (levels.indexOf(currentlevel) >= levels.indexOf(log.level)) {
          if (log.highlight === true) {
            const ctags = `\u001b[1;${colors[levels.indexOf(currentlevel)]}m`;
            const ctage = '\u001b[0m';

            message = `${stringDate} [${ctags}${currentlevel}${ctage}] `;
            message += `${log.name}: ${msg}`;
          } else {
            /* istanbul ignore next */
            message = `${stringDate} [${currentlevel}] ${log.name}: ${msg}`;
          }
          console.log(message);
          if (typeof msg === 'object') {
            // to visualize content of the object instead of [object Object] only.
            /* istanbul ignore next */
            console.log(msg);
          }
        }
      },
      /* eslint-enable no-param-reassign, no-console */
    };


    // END OF IIFE
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */

  // Returns the library name:
  return KZlog;
}));

// -- Export
export default $__ES6GLOB.KZlog;
