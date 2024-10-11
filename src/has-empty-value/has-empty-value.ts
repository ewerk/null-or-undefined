import { isNullOrUndefined } from '../is-null-or-undefined/is-null-or-undefined';

export const hasEmptyValue = (val: number | string | boolean | Array<any> | undefined | null): boolean => {
  if (val instanceof Array) {
    return val.length === 0;
  }
  return isNullOrUndefined(val) || val === '' ;
};
