# @ewerk/null-or-undefined

Type safe utility functions for checking if a value is null or undefined or neither null nor undefined.

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

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.

## Author

Florian Symanowski ([@iceteabottle](https://github.com/iceteabottle))

## Links

- [Repository](https://github.com/ewerk/null-or-undefined)
- [Issues](https://github.com/ewerk/null-or-undefined/issues)
- [Readme](https://github.com/ewerk/null-or-undefined#readme)
