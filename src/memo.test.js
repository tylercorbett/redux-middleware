import { defaultEquality, memoize } from './memo';

describe('Memo tests', () => {
  it('tests defaultEqaulity function', () => {
    const trueResult = defaultEquality([1, 2, 3], [1, 2, 3]);
    const falseResult = defaultEquality([4, 5, 6], [7, 8, 9]);

    expect(trueResult).toBeTruthy();
    expect(falseResult).toBeFalsy();
  });
  it('tests memoize function', () => {
    const fn = jest.fn();
    const memo = memoize(fn);

    memo(1, 2, 3);
    memo(1, 2, 3);
    
    expect(fn).toBeCalledTimes(1);
  });
});

