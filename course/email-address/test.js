/**
 * This is a test suilt
 */
describe('email address validator', function() {
    // this is a specs (specification)
    it('should exists', function() {
        expect(validateEmailAddress).toBeDefined();
    });

    it('should accept valid email addresses', function() {
        expect(validateEmailAddress('ducit.bk@gmail.com')).toBe(true);
        expect(validateEmailAddress('sonnh.90@gmail.com')).toBe(true);
        expect(validateEmailAddress('sonnh.90@gmail-thiendia.com')).toBe(true);
    });

    it('should block invalid email address with white spaces', function() {
        expect(validateEmailAddress('son nh@gmail.com')).toBe(false);
        expect(validateEmailAddress('sonnh@gma il.com')).toBe(false);
        expect(validateEmailAddress('sonnh@gmail.c om')).toBe(false);
    });

    it('should block invalid email address without @', function() {
        expect(validateEmailAddress('ducitbkgmail.com')).toBe(false);
    });

    it('should block invalid email address begin with . or end with .', function() {
        expect(validateEmailAddress('.ducitbk@gmail.com')).toBe(false);
        expect(validateEmailAddress('ducitbk.@gmail.com')).toBe(false);
        expect(validateEmailAddress('ducitbk@.gmail.com')).toBe(false);
        expect(validateEmailAddress('ducitbk@gmail.com.')).toBe(false);
    });

    it('should block invalid email address with domain sections has at least 2 chars', function() {
        expect(validateEmailAddress('ducitbk@gmail.c')).toBe(false);
        expect(validateEmailAddress('ducitbk@g.com')).toBe(false);
        expect(validateEmailAddress('ducitbk@gmail.com.a')).toBe(false);
        expect(validateEmailAddress('ducitbk@gmail.com.a.x')).toBe(false);
        expect(validateEmailAddress('ducitbk@g.c.a.x')).toBe(false);
    });

   it('should block invalid email address with null', function() {
        expect(validateEmailAddress('')).toBe(false);
   });

   it('block email address with invalid characters', function() {      
       expect(validateEmailAddress('son*com@gma.com')).toBe(false);
       expect(validateEmailAddress('soncom@g*ma.com')).toBe(false);
       expect(validateEmailAddress('soncom@gma.c*om')).toBe(false);
       expect(validateEmailAddress('soncom@gma.c+om')).toBe(false);
       expect(validateEmailAddress('son$com@gma.com')).toBe(false);
       expect(validateEmailAddress('son-com@gma.com')).toBe(false);
   });
});
