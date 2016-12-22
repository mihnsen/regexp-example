describe('get file extensiion', function() {
  it('should be defined', function() {
    expect(fileName).toBeDefined();
  });

  it('should return extractly bellow', function() {
    expect(fileName('http://anhdep.pro/wp-content/uploads/2015/03/anh-ngoc-trinh-51.jpg')).toEqual('anh-ngoc-trinh-51.jpg');
  });

  it('should return empty bellow', function() {
    expect(fileName('http://gooogle.com/abc')).toEqual('');
    expect(fileName('abc')).toEqual('');
    expect(fileName('abc.jpg')).toEqual('abc.jpg');
  })
});
