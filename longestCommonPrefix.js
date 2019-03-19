/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return "";
    }
    var mini = 0;
    for(var i=1;i<strs.length;i++){
        if (strs[i].length<strs[mini].length){
            mini = i;
        }
    }
    var result = "";
    for(let j=0;j<strs[mini].length;j++){
        for( i=0;i<strs.length;i++){
            if(strs[mini].slice(0,j+1) != strs[i].slice(0,j+1)){
                return result;
            }
        }
        result =  strs[mini].slice(0,j+1); 
    }
    return result;
};
