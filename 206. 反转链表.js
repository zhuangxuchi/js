/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev=null,
    curr=head,
    nextTemp;
    while(curr!=null){
        nextTemp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=nextTemp;
    }return prev;
};