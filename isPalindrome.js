/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x >= 0){
       var strx = String(x); 
       return strx == strx.split("").reverse().join("");
    }
    return false;
};
