it('should calculate the high tax bracket', function () {
  expect(calculateTaxes(50000)).toEqual(12500);
});
