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
/* global LG, root */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

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
      name: '{{lib:name}}',
      version: '{{lib:version}}',
    };
    obj.name = name || 'unknown!';
    obj.level = level || 'trace';
    obj.highlight = highlight !== false;
    return obj;
  };

  // Attaches constants to KZlog that provide name and version of the lib.
  KZlog.NAME = '{{lib:name}}';
  KZlog.VERSION = '{{lib:version}}';


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
