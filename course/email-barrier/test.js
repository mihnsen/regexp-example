describe('temporary email barrier:', function() {
  it('should existed', function() {
    expect(isTemporaryEmail).toBeDefined();
  });

  it('should accept valid email addresses', function() {
    expect(isTemporaryEmail('baott@ownego.com')).toBe(true);
    expect(isTemporaryEmail('bao.tt@ownego.com')).toBe(true);
    expect(isTemporaryEmail('bao-tt@ownego.com')).toBe(true);
    expect(isTemporaryEmail('-baott@ownego.com')).toBe(true);
    expect(isTemporaryEmail('baott-@ownego.com')).toBe(true);
    expect(isTemporaryEmail('baott@own-ego.com')).toBe(true);
    expect(isTemporaryEmail('baott@ownego.c-om')).toBe(true);
    expect(isTemporaryEmail('bao_tt@ownego.com')).toBe(true);
    expect(isTemporaryEmail('baott@ownego.gmail.com')).toBe(true);
  });

  it('should block null email address', function() {
    expect(isTemporaryEmail('')).toBe(false);
  });

  it('should block invalid email addresses with white space', function() {
    expect(isTemporaryEmail('bao tt@ownego.com')).toBe(false);
    expect(isTemporaryEmail('bao tt@own  ego.com')).toBe(false);
    expect(isTemporaryEmail('bao tt@ownego.c om')).toBe(false);
  });

  it('should block invalid email addresses without @', function() {
    expect(isTemporaryEmail('baott.ownego.com')).toBe(false);
  });

  it('should block invalid email addresses which name begin or end with "."', function() {
    expect(isTemporaryEmail('.baott@ownego.com')).toBe(false);
    expect(isTemporaryEmail('baott.@ownego.com')).toBe(false);
  });

  it('should block invalid email addresses which domain name begin with "."', function() {
    expect(isTemporaryEmail('baott@.ownego.com')).toBe(false);
  });

  it('should block invalid email addresses which domain extension end with "."', function() {
    expect(isTemporaryEmail('baott@ownego.com.')).toBe(false);
  });

  it('should block invalid email addresses which domain sections has less than 2 characters', function() {
    expect(isTemporaryEmail('baott@o.wnego.com')).toBe(false);
    expect(isTemporaryEmail('baott@ownego.c.om')).toBe(false);
    expect(isTemporaryEmail('baott@ownego..com')).toBe(false);
    expect(isTemporaryEmail('baott@ownego.com.a')).toBe(false);
  });

  it('should block invalid email addresses which domain sections begin or end with "-"', function() {
    expect(isTemporaryEmail('baott@-ownego.com')).toBe(false);
    expect(isTemporaryEmail('baott@ownego-.com')).toBe(false);
    expect(isTemporaryEmail('baott@-ownego-.com')).toBe(false);
    expect(isTemporaryEmail('baott@ownego.-com')).toBe(false);
    expect(isTemporaryEmail('baott@ownego.com-')).toBe(false);
    expect(isTemporaryEmail('baott@ownego.-com-')).toBe(false);
  });

  it('should block invalid email addresses which name section is longer than 64 characters', function() {
    expect(isTemporaryEmail('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@ownego.com')).toBe(false);
  });

  it('should block invalid email addresses which has length longer than 255 characters', function() {
    expect(isTemporaryEmail('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@ownego.com')).toBe(false);
  });

  it('should block invalid email addresses which name section contains one of these special charaters (@ (  ) [ ] < > , ; : " "backslash")', function() {
    expect(isTemporaryEmail('bao@tt@ownego.com')).toBe(false);
    expect(isTemporaryEmail('bao(tt@ownego.com')).toBe(false);
    expect(isTemporaryEmail('bao)tt@ownego.com')).toBe(false);
    expect(isTemporaryEmail('bao[tt@ownego.com')).toBe(false);
    expect(isTemporaryEmail('bao]tt@ownego.com')).toBe(false);
    expect(isTemporaryEmail('bao<tt@ownego.com')).toBe(false);
    expect(isTemporaryEmail('bao>tt@ownego.com')).toBe(false);
    expect(isTemporaryEmail('bao,tt@ownego.com')).toBe(false);
    expect(isTemporaryEmail('bao;tt@ownego.com')).toBe(false);
    expect(isTemporaryEmail('bao:tt@ownego.com')).toBe(false);
    expect(isTemporaryEmail('bao"tt@ownego.com')).toBe(false);
    expect(isTemporaryEmail('bao\tt@ownego.com')).toBe(false);
  });

  it('should block invalid email addresses which domain sections contain any characters other than alphanumeric and "-"', function() {
    expect(isTemporaryEmail('baott@own*ego.com')).toBe(false);
    expect(isTemporaryEmail('baott@own$ego.com')).toBe(false);
    expect(isTemporaryEmail('baott@own@ego.com')).toBe(false);
    expect(isTemporaryEmail('baott@own~ego.com')).toBe(false);
    expect(isTemporaryEmail('baott@own_ego.com')).toBe(false);
  });

  it('should block invalid email addresses which come from temporary email services like Mailinator, Maildrop,...', function() {
    expect(isTemporaryEmail('baott@mailinator.com')).toBe(false);
    expect(isTemporaryEmail('baott@maildrop.cc')).toBe(false);
    expect(isTemporaryEmail('baott@dispostable.com')).toBe(false);
    expect(isTemporaryEmail('baott@getnada.com')).toBe(false);
    expect(isTemporaryEmail('baott@spamgourmet.com')).toBe(false);
    expect(isTemporaryEmail('baott@sharklasers.com')).toBe(false);
    expect(isTemporaryEmail('baott@guerrillamail.info')).toBe(false);
    expect(isTemporaryEmail('baott@guerrillamail.biz')).toBe(false);
    expect(isTemporaryEmail('baott@guerrillamail.com')).toBe(false);
    expect(isTemporaryEmail('baott@guerrillamail.de')).toBe(false);
    expect(isTemporaryEmail('baott@guerrillamail.net')).toBe(false);
    expect(isTemporaryEmail('baott@guerrillamail.org')).toBe(false);
    expect(isTemporaryEmail('baott@guerrillamailblock.com')).toBe(false);
    expect(isTemporaryEmail('baott@grr.la')).toBe(false);
    expect(isTemporaryEmail('baott@pokemail.net')).toBe(false);
    expect(isTemporaryEmail('baott@spam4.me')).toBe(false);
    expect(isTemporaryEmail('baott@harakirimail.com')).toBe(false);
    expect(isTemporaryEmail('baott@yopmail.com')).toBe(false);
    expect(isTemporaryEmail('baott@yopmail.fr')).toBe(false);
    expect(isTemporaryEmail('baott@yopmail.net')).toBe(false);
    expect(isTemporaryEmail('baott@mvrht.com')).toBe(false);
  });
});
