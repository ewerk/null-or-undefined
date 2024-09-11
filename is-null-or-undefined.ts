import { neitherNullNorUndefined } from './neither-null-nor-undefined';

export function isNullOrUndefined(input: unknown | undefined | null): input is null | undefined {
  return !neitherNullNorUndefined(input);
}
