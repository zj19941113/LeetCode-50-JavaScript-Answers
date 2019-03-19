/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n == 0){
        return false;
    }
    if(n == 1){
        return true;
    }
    return n%2==0?isPowerOfTwo(n/2):false;
};
