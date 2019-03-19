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
    var l  = null;
    while(head != null){
        var newl = new ListNode(head.val);
        var tmp = l;
        l = newl;
        l.next = tmp;
        head = head.next;
    }
    return l;   
};
