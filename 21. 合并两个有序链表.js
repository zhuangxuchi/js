/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1==null && l2!==null){
        return l2;
    }else if(l2==null && l1!==null){
        return l1;
    }else if(l1==null && l2==null){
        return l1;
    }
    let curr,head;
    if(l1.val<l2.val){
        curr=l1;
        head=curr;
        l1=l1.next;
    }else{
        curr=l2;
        head=curr;
        l2=l2.next;
    }
    while(l1!==null && l2!==null){
        if(l1.val<l2.val){
            curr.next=l1;
            curr=curr.next;
            l1=l1.next;
        }else{
            curr.next=l2;
            curr=curr.next;
            l2=l2.next;
        }
    }
    if(l1==null){
        curr.next=l2;
    }else{
        curr.next=l1;
    }
    return head;
};