/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var arr = [];
    var l = 1, r = 1;
    for(var i=0;i<nums.length;i++){//arr[i] i左边数乘积
        arr[i] = l;
        l *= nums[i];
    }
    for(var j=nums.length-1;j>=0;j--){
        arr[j] *= r;
        r *= nums[j];
    }
    return arr;
};
