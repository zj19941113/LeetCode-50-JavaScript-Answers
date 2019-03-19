/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root){
        return null;
    }
    if(root == p || root == q){
        return root;
    }
    var l = lowestCommonAncestor(root.left,p,q)//左支存在一个的位置
    var r = lowestCommonAncestor(root.right,p,q)
    if(l && r){//左支有一个，右支有一个
        return root;
    }
    if(l){//右没有，都在左，先找到的即为根节点
        return l;
    }
    if(r){
        return r;
    }
    return null;
};
