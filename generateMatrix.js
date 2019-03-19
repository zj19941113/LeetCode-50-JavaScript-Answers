/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var arr = [];
    for(var i = 0; i < n; i++) {
        arr.push(new Array(n).fill(0));//创建n*n零矩阵
    }
    var c = 1;
    var i = 0;
    while(c <= n*n){
        for(var j=i;j<n-i;j++){//第一行
            arr[i][j] = c++;
        }
        for(var j=i+1;j<n-i;j++){//最后一列
            arr[j][n-i-1] = c++;
        }
        for(var j=i+1;j<n-i;j++){//最后一行
            arr[n-i-1][n-j-1] = c++;
        }
        for(var j=i+1;j<n-i-1;j++){//第一列
            arr[n-j-1][i] = c++;
        }
        i++;
    }
    return arr;
};
