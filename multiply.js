/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var res = "";
    var len1 = num1.length;
    var len2 = num2.length;
    for(var i=0;i<len1;i++){
        for(var j=0;j<len2;j++){
            var base = Array(i+j+1).join(0);//i+j个0  eg:"00"  //逐位相乘
            var tmp = String(Number(num1[len1-1-i])*Number(num2[len2-1-j])) + base;
            res = addstr(res,tmp);
        }
    }
    while(res[0] == 0 && res.length > 1){//"002" -> "2"
        res = res.slice(1);
    }
    return res;
};

function addstr(s1, s2) { //字符串相加
    var re = "";
    if(s1.length>=s2.length){
        s2 =  Array(s1.length-s2.length+1).join(0) + s2;
    }else{
        s1 = Array(s2.length-s1.length+1).join(0) + s1;
    }
    var flag = 0;
    for(let i=0;i<s1.length;i++){
        var t = Number(s1[s1.length - 1 - i]) + Number(s2[s1.length - 1 - i]) + flag;
        if(t < 10){
            re = String(t).concat(re);
            flag = 0;
        }else{
            re = String(t-10).concat(re);
            flag = 1;
        }
    }
    return flag == 0? re:"1"+re;
};
