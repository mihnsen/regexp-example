/**
 * @param {Array}
 * @return {Array}
 * @description find equilibrium index of array
 */

/**
 * first we need understand that we need a for loop the input array
 * then each element we need to check if is equilibrium index of this array
 *
 * So how can do it?
 *
 */

/*
function solution(A) {

  for(var i=0; i<A.length; ++i) {
    var leftSum = 0
      , rightSum = 0
    ;
    for(var j=0; j<=i-1; ++j) {
      leftSum+= A[j];
    }
    for(var j=i+1; j<A.length; ++j) {
      rightSum+= A[j];
    }
    if(leftSum == rightSum) return i;
  }
  return -1;
}
*/

function solution(A) {
  var sum = 0
    , left = 0
    , len = A.length
  ;

  for(var i=0; i<len; ++i) {
    sum+=A[i];
  }

  for(var i=0; i<len; ++i) {
    right = sum - left - A[i];
    if(left==right) return i;
    left+= A[i];
  }

  return -1;
}


