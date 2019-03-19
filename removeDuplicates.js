/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(var i=0;i<nums.length;i++){
        var j=1;
        while(nums[i] == nums[i+j]){
            ++j;
        }
        if(j!=1){
            nums.splice(i,j-1);
        }
    }
    return nums.length;
};
