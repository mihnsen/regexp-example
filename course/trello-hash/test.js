describe('validate trello hash', function() {
  it('should validate following hash', function() {
    expect(unHash('680131659347')).toEqual('leepadg');
    expect(unHash('25164871798436')).toEqual('leepnama');
    expect(unHash('924272650996315')).toEqual('gilmnoprs');
    unHash('930846109532517');
  });
});
