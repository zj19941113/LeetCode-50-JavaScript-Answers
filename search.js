/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return searchs(nums, 0, nums.length-1, target);
};

function searchs(nums,l,h,target){
    //搜不到返回-1，搜到了返回target
    if (l > h){
        return -1;
    } 
    var mid = Math.floor((l + h)/2);//[0,1,2,4,5,6,7]
    if(nums[mid] == target){
        return mid;
    }
    if(nums[mid] < nums[h]){ //旋转在左 [6,7,0,1,2,4,5]
        if(nums[mid]<target&&target<=nums[h]){ 
            return searchs(nums,mid+1,h,target);//在右，右顺序
        }else{
            return searchs(nums,l,mid-1,target);//不在右
        }
    }else{ //旋转在右 [2,4,5,6,7,0,1]
        if(nums[l]<=target&&target<nums[mid]){ 
            return searchs(nums,l,mid-1,target);//在左，左顺序
        }else{
            return searchs(nums,mid+1,h,target);//不在右
        }
    }
}
