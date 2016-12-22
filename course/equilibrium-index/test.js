describe('equilibrium index', function() {
  it('should be defined ', function() {
    expect(solution).toBeDefined();
  });

  it('should valid follow array', function() {
    var a = [-1, 3, -4, 5, 1, -6, 2, 1];
    var x = solution(a);
    expect(1==x||3==x||7==x).toBeTruthy();
  });
});
