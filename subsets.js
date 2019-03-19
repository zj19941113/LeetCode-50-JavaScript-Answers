/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var arr = [];
    arr.push([]);
    for(var i=0;i<nums.length;i++){
        var tmp = []; //tmp深拷贝arr
        for(var k=0;k<arr.length;k++){
            tmp[k] = arr[k].slice(0);
        }
        for(var j=0;j<tmp.length;j++){
            tmp[j].push(nums[i]);
            arr.push(tmp[j]);
        }
    }
    return arr;
};
