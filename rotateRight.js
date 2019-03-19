/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head == null||k==0){
        return head;
    }
    var h = head;
    var len = 1;//总长
    while(h.next !=null ){
        ++len;
        h = h.next;
    }
    if(k % len == 0){//不用旋转 head本身
        return head;
    }
    if(k > len){//需旋转
        k = k % len;
    }
    len = len - k;
    var ln = new ListNode(0);//0->1->2->3->NULL
    var n = ln; 
    while(len != 0){
        n.next = head;
        n = n.next;
        head = head.next;
        --len;
    }
    n.next = null;
    var r = head;
    var lr = r;
    while(head.next != null){
        lr = head;
        head = head.next;
        lr = lr.next;
    }
    lr.next = ln.next
    return r;
};
