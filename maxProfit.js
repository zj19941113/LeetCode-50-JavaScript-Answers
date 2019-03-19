/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxtmp = 0;
    for(var i=0;i<prices.length;i++){  
        for(var j=i+1;j<prices.length;j++){ 
            if(prices[j]-prices[i]>maxtmp){
                maxtmp = prices[j]-prices[i];
            }
        }   
    }
    return maxtmp;
};
