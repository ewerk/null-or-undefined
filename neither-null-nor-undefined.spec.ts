import { neitherNullNorUndefined } from './neither-null-nor-undefined';

describe('neitherNullNorUndefined', () => {
  it('returns true for a non-null, non-undefined value', () => {
    expect(neitherNullNorUndefined('string')).toBe(true);
    expect(neitherNullNorUndefined(123)).toBe(true);
    expect(neitherNullNorUndefined({})).toBe(true);
    expect(neitherNullNorUndefined([])).toBe(true);
  });

  it('returns false for null', () => {
    expect(neitherNullNorUndefined(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(neitherNullNorUndefined(undefined)).toBe(false);
  });

  it('returns true for false boolean value', () => {
    expect(neitherNullNorUndefined(false)).toBe(true);
  });

  it('returns true for 0 number value', () => {
    expect(neitherNullNorUndefined(0)).toBe(true);
  });

  it('returns true for empty string', () => {
    expect(neitherNullNorUndefined('')).toBe(true);
  });
});
