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
var sortList = function(head) {
    if (!head || !head.next){
        return head;
    } 
    var slow = head,bk = head,fast = head;
    while(fast && fast.next ){
        bk = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    bk.next = null;
    var l1 = sortList(head);//中分，归并
    var l2 = sortList(slow);
    return merge(l1,l2);
};

function merge(l1,l2){//合并有序链表
    var l = new ListNode(0);
    var rl = l;
    while(l1 && l2){
        if(l1.val < l2.val){
            rl.next = l1;
            l1 = l1.next;
        }else{
            rl.next = l2;
            l2 = l2.next;
        }
        rl = rl.next;
    }
    rl.next = l1==null?l2:l1;
    return l.next;
}
