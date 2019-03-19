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
    // 二叉搜索树(二叉排序树):若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值;
    var res = null;
    lca(root, p , q);
    function lca(root, p, q){
        if((root.val - p.val)*(root.val - q.val) <= 0){ //root为p、q根节点
            res = root;
        }else if(root.val < p.val && root.val < q.val){ //都在右子树
            lca(root.right, p , q);
        }else{
            lca(root.left, p , q);
        }
    }
    return res;
};
