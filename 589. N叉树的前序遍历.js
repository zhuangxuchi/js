/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res=[];
    let preOrderTraverseNode=function(root){
        if(root==null){
            return
        }
        res.push(root.val)
        for(let i=0;i<root.children.length;i++){
            preOrderTraverseNode(root.children[i])
        }
    }
    preOrderTraverseNode(root);
    return res
};