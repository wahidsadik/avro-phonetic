# nodejs-avro-phonetic

nodejs-avro-phonetic is port [jsAvroPhonetic](https://github.com/dipu-bd/jsAvroPhonetic) for nodejs, minus dependency on jQuery and few bugs.

# How to use

To install the package: `$ npm install nodejs-avro-phonetic`.

Example usage:
```javascript
const nodejsAvroPhonetic = require('nodejs-avro-phonetic');

console.log(nodejsAvroPhonetic.parse('ami banglay gan gai')); // আমি বাংলায় গান গাই
```

# How to use

To install the package: `$ npm install avro-phonetic`.

Example usage:
```javascript
const avroPhonetic = require('avro-phonetic');

console.log(avroPhonetic.parse('ami banglay gan gai')); // আমি বাংলায় গান গাই
```

# License

[Mozilla Public License 1.1](http://www.mozilla.org/MPL/1.1/). A copy of the license text is included in `MPL-1.1.txt`.

# TODO:
- [ ] Add travis integration
