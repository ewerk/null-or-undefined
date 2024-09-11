import { isNullOrUndefined } from './is-null-or-undefined';

describe('isNullOrUndefined', () => {
  it('returns true for null', () => {
    expect(isNullOrUndefined(null)).toBe(true);
  });

  it('returns true for undefined', () => {
    expect(isNullOrUndefined(undefined)).toBe(true);
  });

  it('returns false for a non-null and non-undefined value', () => {
    expect(isNullOrUndefined('value')).toBe(false);
  });

  it('returns false for an empty string', () => {
    expect(isNullOrUndefined('')).toBe(false);
  });

  it('returns false for zero', () => {
    expect(isNullOrUndefined(0)).toBe(false);
  });

  it('returns false for false', () => {
    expect(isNullOrUndefined(false)).toBe(false);
  });

  it('returns false for an empty array', () => {
    expect(isNullOrUndefined([])).toBe(false);
  });

  it('returns false for an empty object', () => {
    expect(isNullOrUndefined({})).toBe(false);
  });
});
