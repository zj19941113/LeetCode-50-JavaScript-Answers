/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(var i=1;i<s.length;i++){
        var tmp = s.splice(i,1)[0];
        s.unshift(tmp);
    }
};
