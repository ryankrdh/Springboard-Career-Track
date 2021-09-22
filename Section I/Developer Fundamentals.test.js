it('should calculate the high tax bracket', function () {
  expect(calculateTaxes(50000)).toEqual(12500);
  expect(calculateTaxes(100000)).toEqual(25000);
});

it('should calculate the low tax bracket', function () {
  expect(calculateTaxes(10000)).toEqual(1500);
  expect(calculateTaxes(1000)).toEqual(150);
  expect(calculateTaxes(0)).toEqual(0);
});

// To use matchers like toThrowError, the function needs to be wrapped in parenthesis.

it('should reject invalid incomes', function () {
  expect(() => calculateTaxes('asdfasdf')).toThrowError();
  expect(() => calculateTaxes([])).toThrowError();
  expect(() => calculateTaxes(true)).toThrowError();
});
