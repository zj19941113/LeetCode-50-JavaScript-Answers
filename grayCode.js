/**
 * @param {number} n
 * @return {number[]}
 */
// 000 001 011 010  ——
//                    |
// 100 101 111 110 <——
var grayCode = function(n) {
    if(n == 0){
        return [0];
    }
    var tmp = grayCode(n-1).concat();//深拷贝
    for(var i=0;i<tmp.length;i++){
        tmp[i] += Math.pow(2,n-1);
    }
    tmp.reverse();
    return grayCode(n-1).concat(tmp);
};
