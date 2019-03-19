/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
    var word = str.split(" ")[0];
    if(parseInt(word)){
        if(parseInt(word)>Math.pow(2,31)-1){
            return Math.pow(2,31)-1;
        };
        if(parseInt(word)<-Math.pow(2,31)){
            return -Math.pow(2,31);
        };
        return parseInt(word);
    }
    return 0;
};
