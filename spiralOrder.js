/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var arr = [];
    while(!(matrix.length == 0||matrix[0].length == 0)){
        var tmp = matrix.shift(); //剪第一行
        arr = arr.concat(tmp);
        if(matrix.length == 0||matrix[0].length == 0){ //[]   [[],[]]
            return arr;
        }
        for(var i=0;i<matrix.length;i++){//剪最后一列
            var tmp = matrix[i].pop();
            arr.push(tmp);
        }
        if(matrix.length == 0||matrix[0].length == 0){
            return arr;
        }
        var tmp = matrix.pop().reverse();//剪最后一行
        arr = arr.concat(tmp);
        if(matrix.length == 0||matrix[0].length == 0){
            return arr;
        }
        for(var i=0;i<matrix.length;i++){//剪第一列
            var tmp = matrix[matrix.length-1-i].shift();
            arr.push(tmp);
        }
    }
    return arr;
};
