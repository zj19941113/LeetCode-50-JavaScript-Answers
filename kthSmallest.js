/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var list = [];
    order(root,list);
    return list[k-1];
};
function order(root,list){//中序遍历
    if(!root){
        return;
    }
    order(root.left,list);
    list.push(root.val);
    order(root.right,list);
}
