/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root==null){
        return false;
    }else if(root.left==null && root.right==null && root.val==sum){
        return true;
    }
    if(root.left!==null){
        root.left.val+=root.val;
    }
    if(root.right!==null){
        root.right.val+=root.val;
    }
    return hasPathSum(root.left,sum) || hasPathSum(root.right,sum)
};