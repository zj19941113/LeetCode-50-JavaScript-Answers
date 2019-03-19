/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length == 0){
        return [[]];
    }
    if(nums.length == 1){
        var re = [];
        re.push(nums);
        return re;
    }
    var nums1 = permute(nums.slice(1));
    var num0 = nums[0];
    var result = [];
    for(var i=0;i<nums1.length;i++){
        for(var j=0;j<nums1[i].length+1;j++){
            var tmp = nums1[i].concat();
            tmp.splice(j,0,num0);
            result.push(tmp);
        }
    }
    return result;
};
