export function neitherNullNorUndefined<T>(input: T): input is NonNullable<T> {
  // eslint-disable-next-line eqeqeq,no-eq-null
  return input != null; // != intentional
}
