/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null){
        return 0;
    }
    var l_height = maxDepth(root.left);
    var r_height = maxDepth(root.right);
    return Math.max(l_height,r_height) + 1;
};
