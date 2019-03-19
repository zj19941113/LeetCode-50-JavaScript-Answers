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
var detectCycle = function(head) {
    var slow = head,fast = head;
    var isloop = false;
    while(fast && fast.next){
        slow  = slow.next;
        fast = fast.next.next;
        if(slow == fast){//相遇
            isloop = true;
            break;
        }
    }
    if(isloop){
        var l  = head;
        while(l != slow){
            l = l.next;
            slow = slow.next;
        }
        return slow;
    }
    return null;
};
