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
var maxPathSum = function(root) {
    var len = -Number.MAX_VALUE;
    submax(root);
    function submax(t){
        if(t == null){
            return 0;
        }
        var l = Math.max(submax(t.left),0);
        var r = Math.max(submax(t.right),0);
        if(t.val + l + r > len){
            len = t.val + l + r;
        }
        return Math.max(l,r) + t.val;
    }
    return len;
};
