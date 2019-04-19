/** **************************************************************************
 *
 * A minimal lightweight logging library for JavaScript.
 *
 * kzlog.js is built upon the Prototypal Instantiation pattern. It
 * returns an object by calling its constructor. It doesn't use the new
 * keyword.
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to the constructor,
 *
 *
 * Public Methods:
 *  . help                        dumps, to the console, the on-line help,
 *  . version                     returns the version of the library,
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
 * @namespace    KZlog
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* eslint-disable one-var, semi-style */

'use strict';

(function() {
  // IIFE

  // -- Module path


  // -- Local modules
  var L = LG.Public
    ;


  // -- Local constants
  var previousKZlog
    , methods
    ;


  // -- Local variables


  // -- Public ---------------------------------------------------------------

  /**
   * Creates and returns the object KZlog.
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
    var obj = Object.create(methods);
    obj.name = name || 'unknown!';
    obj.level = level || 'trace';
    obj.highlight = highlight !== false;
    return obj;
  };

  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  previousKZlog = root.KZlog;

  // Current version of the library:
  KZlog.VERSION = '{{lib:version}}';


  // -- Public Static Methods ----------------------------------------------

  /**
   * Returns a reference to this KZlog object.
   *
   * Nota:
   * Runs KZlog in noConflict mode by returning the KZlog variable
   * to its previous owner and returning a reference to this KZlog object.
   *
   * @method ()
   * @public
   * @param {}            -,
   * @returns {Object}    returns a reference to this object,
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
     * Dumps, to the console, the on-line help.
     *
     * @function ()
     * @public
     * @param {}            -,
     * @returns {}          -,
     * @since 0.0.0
     */
    help: function() {
      var help = ['',
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
        ''
      ].join('\n');

      console.log(help);
    },

    /**
     * Returns the version of the library.
     *
     * @function ()
     * @public
     * @param {}            -,
     * @returns {String}    returns the version of the library,
     * @since 0.0.0
     */
    version: function() {
      return '{{lib:version}}';
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
    setName: function(name) {
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
    setLevel: function(level) {
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
    setHighlight: function(highlight) {
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
    trace: function(msg) {
      L.print(this, msg, 'trace');
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
    debug: function(msg) {
      L.print(this, msg, 'debug');
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
    info: function(msg) {
      L.print(this, msg, 'info');
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
    warn: function(msg) {
      L.print(this, msg, 'warn');
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
    error: function(msg) {
      L.print(this, msg, 'error');
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
    fatal: function(msg) {
      L.print(this, msg, 'fatal');
      return this;
    }
  };
}());
/* eslint-enable one-var, semi-style */