# KZlog

[![NPM version][npm-image]][npm-url]
[![GitHub last commit][commit-image]][commit-url]
[![Github workflow][ci-image]][ci-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm bundle size][npm-bundle-size-image]][npm-bundle-size-url]
[![License][license-image]](LICENSE.md)

KZlog is a minimal lightweight logging library in Javascript that runs on the browser and on Node.JS.


## Quick Startup

```javascript
// name {String}: the name of the module/library,
// level {String}: the threshold level,
// highlight {Boolean}: log message printed in color or B&W,
const log = KZlog(name, level, highlight);
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

[npm-image]: https://img.shields.io/npm/v/@mobilabs/kzlog.svg?logo=npm&logoColor=fff&label=NPM+package
[release-image]: https://img.shields.io/github/release/jclo/kzlog.svg?include_prereleases
[commit-image]: https://img.shields.io/github/last-commit/jclo/kzlog.svg?logo=github
[ci-image]: https://github.com/jclo/kzlog/actions/workflows/ci.yml/badge.svg
[coveralls-image]: https://img.shields.io/coveralls/jclo/kzlog/master.svg?&logo=coveralls
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/minzip/@mobilabs/kzlog.svg
[license-image]: https://img.shields.io/npm/l/@mobilabs/kzlog.svg

[npm-url]: https://www.npmjs.com/package/@mobilabs/kzlog
[release-url]: https://github.com/jclo/kzlog/tags
[commit-url]: https://github.com/jclo/kzlog/commits/master
[ci-url]: https://github.com/jclo/kzlog/actions/workflows/ci.yml
[coveralls-url]: https://coveralls.io/github/jclo/kzlog?branch=master
[npm-bundle-size-url]: https://img.shields.io/bundlephobia/minzip/@mobilabs/kzlog
[license-url]: http://opensource.org/licenses/MIT
