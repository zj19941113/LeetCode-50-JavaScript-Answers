/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s==null&&s.length<1){
        return "";
    }
    var fir = 0;
    var las = 0;
    for(var i=0;i<s.length;i++){
        var lenl = getsub(s,i,i);
        var lenr = getsub(s,i,i+1);
        var len = Math.max(lenl,lenr);
        if(len>las-fir){
            fir = i - Math.floor((len-1)/2);
            las = i + Math.floor(len/2);
        }     
    }
    return s.slice(fir,las+1);
};

function getsub(s,l,r){
    while(l>=0&&r<=s.length-1&&s.charAt(l)==s.charAt(r)){
        l--;
        r++;
    }
    return r-l-1;
}
