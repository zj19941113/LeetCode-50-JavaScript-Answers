/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return fastkmax(nums,0,nums.length-1,k);
};

function fastkmax(n,l,r,k){
    var mid = partiton(n,l,r);//排序 左边都是比mid小的，右边都是比mid大的
    var rk = r - mid + 1;
    if(rk == k){
        return n[mid];
    }
    if(rk > k){
        return fastkmax(n,mid + 1,r,k);
    }
    return fastkmax(n,l,mid - 1,k -rk );
}

function partiton(n,l,r){//一次快排
    var base = n[l];
    var i = l,j = r,tmp;
    while(i < j){
        while(n[j] >= base && i < j){
            j--;
        }
        while(n[i] <= base && i < j){
            i++;
        }
            tmp = n[i];
            n[i] = n[j];
            n[j] = tmp;
    }
    n[l] = n[i];
    n[i] = base;
    return i;
 }
