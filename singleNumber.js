/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 交换律：a ^ b ^ c  <=> a ^ c ^ b,俩两相同的移到一起
    // 相同的数异或为0: n ^ n => 0,只剩下单个的了
    // 任何数于0异或为任何数 0 ^ n => n
    var s = 0;
    for(var i=0;i<nums.length;i++){
        s = s^nums[i];
    }
    return s;
};
