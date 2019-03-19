/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var len = nums.length;
    var minl = nums[0]+nums[1]+nums[2];
    for(var i=0;i<len-2;i++){
        for(var j=i+1;j<len-1;j++){
            for(var k=j+1;k<len;k++){
                var tmp = nums[i]+nums[j]+nums[k];
                if(Math.abs(tmp-target)<Math.abs(minl-target)){
                    minl = tmp;
                }
            }
        }
    }
    return minl;
};
