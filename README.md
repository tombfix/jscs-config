# jscs-config-tombfix

[![Build Status](https://api.travis-ci.org/tombfix/jscs-config.svg?branch=master)](https://travis-ci.org/tombfix/jscs-config) [![NPM Version](https://img.shields.io/npm/v/jscs-config-tombfix.svg)](https://npmjs.org/package/jscs-config-tombfix)

[JSCS](http://jscs.info/) [Shareable Config](http://jscs.info/overview#preset) for [Tombfix](https://github.com/tombfix)

## Installation

``` sh
$ npm install jscs jscs-config-tombfix --save-dev
```

## Usage

In `package.json`:

``` json
{
  "scripts": {
    "lint": "jscs ."
  },
  "devDependencies": {
    "jscs": "",
    "jscs-config-tombfix": ""
  },
  "jscsConfig": {
    "preset": "tombfix"
  }
}
```

Or:

``` json
{
  "scripts": {
    "lint": "jscs -p tombfix ."
  },
  "devDependencies": {
    "jscs": "",
    "jscs-config-tombfix": ""
  }
}
```

Or, in `.jscsrc`:

``` json
{
  "preset": "tombfix"
}
```

Then lint:

``` sh
$ npm run lint
```

## Contributing

Please see [CONTRIBUTING.md](/CONTRIBUTING.md).

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

Please see [LICENSE](/LICENSE).
