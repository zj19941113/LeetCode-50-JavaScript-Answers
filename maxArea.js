/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxs = 0;
    for (var i=0;i<height.length;i++){
        for (var j=i+1;j<height.length;j++){
            var tmp = Math.min(height[i],height[j])*(j-i);
            if(tmp>maxs){
                maxs = tmp;
            }
        }
    }
    return maxs;
};
