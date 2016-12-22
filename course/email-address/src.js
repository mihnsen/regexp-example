/**
 * Validate a email address
 * @description a function to validate email address
 *
 * @return Boolean is email address
 */
function validateEmailAddress(str) {
//  return !!str.match(/^([a-zA-Z0-9]|[a-zA-Z0-9]{2}|[a-zA-Z0-9][a-zA-Z0-9_.+]{1,}[a-zA-Z0-9])@[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9\.]+[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$/);
//  return !!str.match(/^([a-z\d]|[a-z\d]{2}|[a-z\d][\w.+]{1,}[a-z\d])@[a-z\d][a-z\d-]*[a-z\d\.]+[a-z\d][a-z\d-]*[a-z\d]$/i);

  return !!str.match(/^([a-z\d]|[a-z\d]{2}|[a-z\d][\w.+]{1,}[a-z\d])@([a-z\d][a-z\d-]*[a-z\d]\.)+[a-z\d][a-z\d-]*[a-z\d]$/i);
}
