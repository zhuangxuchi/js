/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root==null){
        return root
    }
    if(root.left==null && root.right==null){
        return root
    }
    let a=root.left;
    root.left=root.right;
    root.right=a;
    invertTree(root.left);
    invertTree(root.right);
    return root
};