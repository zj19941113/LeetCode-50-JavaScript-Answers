/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a,b){return a-b});
    var ls = [];
    for (var i=0;i<nums.length-2;i++) {
        if(nums[i]==nums[i-1]){ //i和前面一样，跳过
            continue;
        }
        for (var j=i+1;j<nums.length-1;j++) {
            if(nums[j]==nums[j-1]&&j!=i+1){ //j和前面一样，且前面不是i，跳过
                continue;
            }
            for (var k=j+1;k<nums.length;k++) {
                if(nums[k]+nums[j]+nums[i] == 0){
                    ls.push([nums[i],nums[j],nums[k]]); //找到k跳出，不再往后
                    break;
                }
            }
        }
    }
    return ls;
};
