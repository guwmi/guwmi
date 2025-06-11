// import function to test
import isEmpty from '../../utils/isEmpty';

describe('isEmpty Helper Function', () => {

  test('returns correct value for all data types', () => {
    expect(isEmpty('')).not.toBeFalsy();
    expect(isEmpty('Text string')).toBeFalsy();
    expect(isEmpty(Number('test'))).not.toBeFalsy();
    expect(isEmpty(10)).toBeFalsy();
    expect(isEmpty([])).not.toBeFalsy();
    expect(isEmpty([1,2,3,4,5])).toBeFalsy();
    expect(isEmpty({})).not.toBeFalsy();
    expect(isEmpty({test: 'value'})).toBeFalsy();
    expect(isEmpty(true)).toBeFalsy();
    expect(isEmpty(false)).toBeFalsy();
    const undef: undefined = undefined;
    expect(isEmpty(undef)).not.toBeFalsy();
    const nullVar: null = null;
    expect(isEmpty(nullVar)).not.toBeFalsy();
  })
})