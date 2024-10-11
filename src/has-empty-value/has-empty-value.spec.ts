import { hasEmptyValue } from './has-empty-value';

describe('hasEmptyValue helper', () => {
  it('should return true, if "empty" value was provided', () => {
    expect(hasEmptyValue('')).toBe(true);
    expect(hasEmptyValue([])).toBe(true);
    expect(hasEmptyValue(null)).toBe(true);
    expect(hasEmptyValue(undefined)).toBe(true);
  });

  it('should return false, if "non-empty" value was provided', () => {
    expect(hasEmptyValue(false)).toBe(false);
    expect(hasEmptyValue(0)).toBe(false);
    expect(hasEmptyValue('test string')).toBe(false);
    expect(hasEmptyValue([
      'test',
      'string',
    ])).toBe(false);
  });
});
