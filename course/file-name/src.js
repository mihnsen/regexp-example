/**
 * @param {string} url
 * @return {string} filename
 * @description
 * get file name from url
 */
function fileName(url) {
  //var fileName = url.match(/^http:\/\/.+\/[a-z\d-]+\.[a-z\d]*$/gi);
  var fileName = url.match(/([^\/]+)(\.\w+$)/);
  return fileName?fileName[0]:'';
}
