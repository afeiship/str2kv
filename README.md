# str2kv
> String to kv obj.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/str2kv
```

## usage
```js
import str2kv from '@jswork/str2kv';

// default saparator is [:/@]
const kmstr1 = '1id:value; 2id:value2; 3id:value3';
const obj1 = str2kv(km2str);
// { '1id': 'value', '2id': 'value2', '3id': 'value3' }

// custom saparator
const kmstr2 = '1id:value; 2id:value2; 3id:value3';
const obj2 = str2kv(km2str, ':');
// { '1id': 'value', '2id': 'value2', '3id': 'value3' }
```

## license
Code released under [the MIT license](https://github.com/afeiship/str2kv/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/str2kv
[version-url]: https://npmjs.org/package/@jswork/str2kv

[license-image]: https://img.shields.io/npm/l/@jswork/str2kv
[license-url]: https://github.com/afeiship/str2kv/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/str2kv
[size-url]: https://github.com/afeiship/str2kv/blob/master/dist/str2kv.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/str2kv
[download-url]: https://www.npmjs.com/package/@jswork/str2kv
