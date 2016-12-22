/**
 * Snake case php variable
 */
describe('ip adress', function() {
  it('should exists', function() {
    expect(snakeToCamel).toBeDefined();
  });

  it('should valid following variable', function() {
    expect(snakeToCamel('$my_variable')).toBe('$myVariable');
    expect(snakeToCamel('$my_another_variable')).toBe('$myAnotherVariable');
    expect(snakeToCamel('$my_another_single_variable')).toBe('$myAnotherSingleVariable');
  });

  it('should do nothing variable with not start with single character', function() {
    expect(snakeToCamel('$_variable')).toBe('$_variable');
    expect(snakeToCamel('$_POST')).toBe('$_POST');
    expect(snakeToCamel('$_GET')).toBe('$_GET');
  });

  it('should do nothing with camel case variable', function() {
    expect(snakeToCamel('$normal')).toBe('$normal');
    expect(snakeToCamel('$camelCase')).toBe('$camelCase');
  });

  it('should do nothing not a variable', function() {
    expect(snakeToCamel('not')).toBe('not');
    expect(snakeToCamel('not_variable')).toBe('not_variable');
  });

  it('should do nothing variable has attribute', function() {
    expect(snakeToCamel('$this->my_atrribute')).toBe('$this->my_atrribute');
  });
})
