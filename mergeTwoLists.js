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
    var l3 = new ListNode(0);
    var l4 = l3;
    while(l1!=null && l2!=null){
        if(l1.val<l2.val){
            l4.next = l1;
            l1 = l1.next;
        }else{
            l4.next = l2;
            l2 = l2.next;
        }
        l4 = l4.next;
    }
    l4.next = l1==null?l2:l1;
    return l3.next;
};
