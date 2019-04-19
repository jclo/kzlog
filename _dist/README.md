# KZlog

[![NPM version][npm-image]][npm-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![License][license-image]](LICENSE.md)
<!--- [![node version][node-image]][node-url] -->

[![NPM install][npm-install-image]][npm-install-url]

KZlog is a minimal lightweight logging library in Javascript that runs on the browser and on Node.JS.


## Quick Startup

```javascript
// name {String}: the name of the module/library,
// level {String}: the threshold level,
// highlight {Boolean}: log message printed in color or B&W,
var log = KZlog(name, level, highlight);
log.warn(message);
// output: [2019-4-17 18:39:37:357] [error] name: aaaa
```


## API

## Methods

KZlog provides the following methods:


| Methods              | Description |
|:---------------------|:------------|
| help                 | dumps, to the console, the on-line |
| version              | returns the version of the library |
| setName              | updates the name of the module/library to be displayed |
| setLevel             | updates the threshold level |
| setHighlight         | updates the highlight mode |
| trace                | dumps a trace message |
| debug                | dumps a debug message |
| info                 | dumps a info message |
| warn                 | dumps a warn message |
| error                | dumps a error message |
| fatal                | dumps a fatal message |


## Threshold level

The default threshold level is `trace`. It can be set to `trace`, `debug`, `info`, `warn`, `error`, `fatal` or `off`.


## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/@mobilabs/kzlog.svg?style=flat-square
[npm-install-image]: https://nodei.co/npm/@mobilabs/kzlog.png?compact=true
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/@mobilabs/kzlog.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/kzlog.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/kzlog/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/kzlog/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/kzlog/dev-status.svg?theme=shields.io
[license-image]: https://img.shields.io/npm/l/@mobilabs/kzlog.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@mobilabs/kzlog
[npm-install-url]: https://nodei.co/npm/@mobilabs/kzlog
[node-url]: http://nodejs.org/download
[download-url]: https://www.npmjs.com/package/@mobilabs/kzlog
[travis-url]: https://travis-ci.org/jclo/kzlog
[coveralls-url]: https://coveralls.io/github/jclo/kzlog?branch=master
[dependencies-url]: https://david-dm.org/jclo/kzlog
[devdependencies-url]: https://david-dm.org/jclo/kzlog?type=dev
[license-url]: http://opensource.org/licenses/MIT
