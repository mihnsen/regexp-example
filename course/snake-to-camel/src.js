/**
 * Convert snake variable to camel case variable
 * @description a function to validate email address
 *
 * @return String camelCase variable
 */
function snakeToCamel(str) {
  return str.replace(/(_)([a-z])/g, '$2');
}
