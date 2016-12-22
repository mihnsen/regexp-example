/**
 * @param {string} to hash
 * @return {int}
 * @description a simple hash
 */
function hash(str) {
  var h = 9
    , letters = "acdegilmnoprstuw"
  ;
  for(var i=0; i<str.length; i++) {
    h = (h * 37 + letters.indexOf(str[i]));
  }

  return h;
}

/**
 * @param {string} hash value
 * @return {string} value before hash
 * @description decode previous hash
 */
function unHash(str) {
  var h = 9
    , v = parseInt(str)
    , result = []
    , letters = "acdegilmnoprstuw"
  ;

  while(v>h) {
    var c = v%37;
    v = Math.floor(v/37);

    result.unshift(letters[c]);
  }
  console.log(result.join(''));

  return result.join('');
}
