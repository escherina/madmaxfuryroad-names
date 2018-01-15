# madmaxfuryroad-names

[![Build Status][travis-badge]][travis-link]
[![codecov][codecov-badge]][codecov-link]

For all your random Mad Max: Fury Road character needs.

## Installation

This module is distributed via npm:

```
npm install --save madmaxfuryroad-names
```

Alternatively you can get the UMD build which is also published to the npm
registry and is available at [unpkg][unpkg-link]:

* [https://unpkg.com/madmaxfuryroad-names@2.0.1/dist/index.umd.js][npmcdn-link]
* [https://unpkg.com/madmaxfuryroad-names@2.0.1/dist/index.umd.min.js][npmcdn-min-link]

The UMD build exposes the module as a global called `madMaxFuryRoadNames` or as an unnamed
module for AMD/CommonJS (require it by its file path)

## Usage

```javascript
const madMaxFuryRoadNames = require("madmaxfuryroad-names"); // CommonJS
console.log(madMaxFuryRoadNames.random()); // Imperator Furiosa
// you can also get the full array with `madMaxFuryRoadNames.all`
```

[travis-badge]: https://travis-ci.org/escherina/madmaxfuryroad-names.svg?branch=master
[travis-link]: https://travis-ci.org/escherina/madmaxfuryroad-names
[codecov-badge]: https://codecov.io/gh/escherina/madmaxfuryroad-names/branch/master/graph/badge.svg
[codecov-link]: https://codecov.io/gh/escherina/madmaxfuryroad-names
[umd]: https://github.com/umdjs/umd
[unpkg-link]: https://unpkg.com/
[npmcdn-link]: https://unpkg.com/madmaxfuryroad-names@1.0.1/dist/index.umd.js
[npmcdn-min-link]: https://unpkg.com/madmaxfuryroad-names@1.0.1/dist/index.umd.min.js
