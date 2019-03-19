/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n==1){
        return 1;
    }
    if(n==2){
        return 2;
    }
    var i = 1;
    var j = 2;
    for(var k=0;k<n-2;k++){
        var tmp = i + j;
        i = j;
        j = tmp;
    }
    return j;
};
