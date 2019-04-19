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
 * @namespace LG.Public
 * @exports   -
 * @author    -
 * @since     0.0.0
 * @version   -
 * ************************************************************************ */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

(function() {
  // IIFE


  // -- Local modules


  // -- Local constants
  var DEFAULT_LEVEL = 'trace'
    , LEVELS = ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'off']
    ;


  // -- Local variables


  // -- Private Functions ----------------------------------------------------

  /**
   * Returns the default level.
   *
   * @function ()
   * @private
   * @param {}            -,
   * @returns {Array}     returns the default level,
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
   * @param {}            -,
   * @returns {Array}     returns the defined levels,
   * @since 0.0.0
   */
  function _levels() {
    return LEVELS;
  }


  // -- Public Static Methods ------------------------------------------------

  LG.Public = {

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
    /* eslint-disable no-param-reassign */
    print: function(log, msg, currentlevel) {
      var levels
        , colors
        , date
        , stringDate
        ;

      levels = _levels();
      colors = [32, 36, 34, 33, 35, 31, 0];
      date = new Date();
      stringDate = '[' + date.getFullYear() + '-'
                       + (date.getMonth() + 1) + '-'
                       + date.getDate() + ' '
                       + date.getHours() + ':'
                       + date.getMinutes() + ':'
                       + date.getSeconds() + ':'
                       + date.getMilliseconds() + ']';

      if (!log.level) {
        /* istanbul ignore next */
        log.level = _default();
      }

      if (log.highlight === undefined) {
        /* istanbul ignore next */
        log.highlight = true;
      }

      if (levels.indexOf(currentlevel) >= levels.indexOf(log.level)) {
        if (log.highlight === true) {
          console.log(stringDate + ' [' + currentlevel + '] '
                                 + '\u001b[1;' + colors[levels.indexOf(currentlevel)]
                                 + 'm' + log.name + ':\u001b[0m ' + msg);
        } else {
          /* istanbul ignore next */
          console.log(stringDate + ' [' + currentlevel + '] ' + log.name + ': ' + msg);
        }
        if (typeof msg === 'object') {
          // to visualize content of the object instead of [object Object] only.
          /* istanbul ignore next */
          console.log(msg);
        }
      }
    }
  };
  /* eslint-enable no-param-reassign */
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
