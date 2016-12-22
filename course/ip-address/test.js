/**
 * ip address filter
 */
describe('ip adress', function() {
  it('should exists', function() {
    expect(ipAddress).toBeDefined();
  });

  it('should valid following address', function() {
    expect(ipAddress('2.1.0.1')).toBe(true);
    expect(ipAddress('23.1.0.1')).toBe(true);
    expect(ipAddress('2.1.01.1')).toBe(true);
    expect(ipAddress('192.168.0.102')).toBe(true);
    expect(ipAddress('192.198.0.172')).toBe(true);
    expect(ipAddress('192.168.1.1')).toBe(true);
    expect(ipAddress('255.255.255.0')).toBe(true);
    expect(ipAddress('192.168.01.1')).toBe(true);
    expect(ipAddress('192.168.001.1')).toBe(true);
  });

  it('should block non IP4 address', function() {
    expect(ipAddress('192.256.1.1')).toBe(false);
    expect(ipAddress('192.168.1.256')).toBe(false);
    expect(ipAddress('192.168.256.1')).toBe(false);

    expect(ipAddress('192.168.1')).toBe(false);
    expect(ipAddress('192.168.1.')).toBe(false);
    expect(ipAddress('192.168')).toBe(false);
    expect(ipAddress('192')).toBe(false);
    expect(ipAddress('192.168.1.1.1')).toBe(false);
    expect(ipAddress('192.168.1.1.')).toBe(false);
  });

  it('should block non digit character', function() {
    expect(ipAddress('1a.255.255.255')).toBe(false);
    expect(ipAddress('a.255.255.255')).toBe(false);
    expect(ipAddress('192.168.1._')).toBe(false);
    expect(ipAddress('192.168.1.*')).toBe(false);
  });
})
