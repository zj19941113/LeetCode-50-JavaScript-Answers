/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0;
    var maxsum = nums[0];
    for(var i=0;i<nums.length;i++){
        sum +=nums[i];
        if(sum > maxsum){
            maxsum = sum;
        } 
        if(sum < 0){
            sum = 0;
        }
    }
    return maxsum;
};
