/**
 * Temporary email barrier
 *
 * @desc There're many services provide us a
 * temporary email, for example: Mailinator,
 * Maildrop, Spamgourmet,... We have to block
 * emails from those services to avoid spam
 *
 * -----------------------------------------------
 * List of blocked services:
 * -----------------------------------------------
 * @mailinator.com - mailinator.com
 * @maildrop.cc - maildrop.cc
 * @dispostable.com - dispostable.com
 * @getnada.com - getnada.com
 * @spamgourmet.com - spamgourmet.com
 * @sharklasers.com - sharklasers.com
 * @guerrillamail.info - guerrillamail.info
 * @guerrillamail.biz - guerrillamail.biz
 * @guerrillamail.com - guerrillamail.com
 * @guerrillamail.de - guerrillamail.de
 * @guerrillamail.net - guerrillamail.net
 * @guerrillamail.org - guerrillamail.org
 * @guerrillamailblock.com - guerrillamailblock.com
 * @grr.la - grr.la
 * @pokemail.net - pokemail.net
 * @spam4.me - spam4.me
 * @harakirimail.com - harakirimail.com
 * @yopmail.com - yopmail.com
 * @yopmail.fr - yopmail.fr
 * @yopmail.net - yopmail.net
 * @mvrht.com - 10minutemail.com
 * -----------------------------------------------
 *
 * @param {string} emailAddress
 * @return {boolean} decide email address is
 * valid or not
 */
function isTemporaryEmail(emailAddress) {
  // Reuse email regex from angularjs
  // @see https://github.com/angular/angular.js/blob/master/src/ng/directive/input.js#L14
  // @see https://github.com/ownego/valdr
  var regexPattern = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@(?!mailinator|maildrop|dispostable|getnada|spamgourmet|sharklasers|guerrillamail|grr|pokemail|spam4|harakirimail|yopmail|mvrht)[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9]))*$/;

  return !!emailAddress.match(regexPattern);
}
