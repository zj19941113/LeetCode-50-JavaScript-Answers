/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    var strx;
    var mayAns;
    if(x>0){
        strx = String(x);
        mayAns = Number(strx.split("").reverse().join(""));
        return mayAns<=Math.pow(2,31)-1?mayAns:0;
    }
    else{
        strx = String(-x);
        mayAns = -Number(strx.split("").reverse().join(""));
        return mayAns>=-Math.pow(2,31) ?mayAns:0;
    }
    return result;
};
