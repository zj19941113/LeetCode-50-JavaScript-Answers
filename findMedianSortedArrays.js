/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(a, b) {
    // 谁小谁移，移动k次，k中间
    var n = a.length;
    var m = b.length;
    var nm = n + m;
    var ni = 0,mi = 0,x,y; 

    while(ni + mi < nm ){  
        if(ni < n ){
            while(mi == m || a[ni] <= b[mi]){
                ni=ni+1;
                if(ni+mi == (nm+1)/2){ //总长奇
                    return a[ni-1];
                }
                if(ni+mi == nm/2){//总长偶
                    x = a[ni-1];
                    break;
                }
                if(ni+mi == (nm/2 + 1)){ 
                    y = a[ni-1];
                    return (x+y)/2
                }
            }
        }
        if(mi < m){
            while(ni == n || b[mi] <= a[ni]){
                mi = mi + 1;
                if(ni+mi == (nm+1)/2){
                    return b[mi-1];
                }
                if(ni+mi == nm/2){
                    x = b[mi-1];
                }
                if(ni+mi == (nm/2 + 1)){ 
                    y = b[mi-1];
                    return (x+y)/2
                }
            }
        }
    }
    return -1;
};
