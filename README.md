# @ewerk/null-or-undefined

[![NPM Version](https://img.shields.io/npm/v/%40ewerk%2Fnull-or-undefined?registry_uri=https%3A%2F%2Fregistry.npmjs.org)](https://www.npmjs.com/package/@ewerk/null-or-undefined)

Type safe utility functions for checking nullish values.
It's dependency free and has no dependencies on external libraries.

## Installation

You can install this package using npm:

```sh
npm install @ewerk/null-or-undefined
```

## Usage

### `isNullOrUndefined`

This function checks if a value is either `null` or `undefined`.

```typescript
import { isNullOrUndefined } from '@ewerk/null-or-undefined';

const value = null;
if (isNullOrUndefined(value)) {
  console.log('Value is null or undefined');
}
```

### `neitherNullNorUndefined`

This function checks if a value is neither `null` nor `undefined`. A neat use case is to filter out `null` and `undefined` values in RxJS observables.

```typescript
import { neitherNullNorUndefined } from '@ewerk/null-or-undefined';

const value = 'Hello';
if (neitherNullNorUndefined(value)) {
  console.log('Value is neither null nor undefined');
}

// Example with RxJS
const value$: Observable<{title: string} | undefined> = of(undefined);

// before
const titleOld$: string = value$.pipe(
  filter((value) => value !== null && value !== undefined),
  map((value) => value as {title: string}), // cast is necessary to get rid of the undefined type
  map((value) => value.title),
);

// after
const titleNew$: string = value$.pipe(
  filter(neitherNullNorUndefined),
  map((value) => value.title)
);
```

### `hasEmptyValue`

This function checks if a value is considered "empty". A value is considered empty if it is an empty array, `null`, `undefined`, or an empty string.
This function could be useful for validating user input.

```typescript
import { hasEmptyValue } from '@ewerk/null-or-undefined';

console.log(hasEmptyValue('')); // true
console.log(hasEmptyValue([])); // true
console.log(hasEmptyValue(null)); // true
console.log(hasEmptyValue(undefined)); // true

console.log(hasEmptyValue(false)); // false
console.log(hasEmptyValue(0)); // false
console.log(hasEmptyValue('test string')); // false
console.log(hasEmptyValue(['test', 'string'])); // false
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.

## Author

Florian Symanowski ([@iceteabottle](https://github.com/iceteabottle))

## Contributors

- [Bartosz Staszulonek](https://github.com/barsta1)
- [Robert Kania](https://github.com/RobusK)
- [Johannes Voigt](https://github.com/jvoigt)
- [Robin Beier](https://github.com/rbeier)

## Links

- [Repository](https://github.com/ewerk/null-or-undefined)
- [Issues](https://github.com/ewerk/null-or-undefined/issues)
- [Readme](https://github.com/ewerk/null-or-undefined#readme)
