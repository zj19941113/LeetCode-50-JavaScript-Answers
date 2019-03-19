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
var addTwoNumbers = function(l1, l2) {
    var re = new ListNode(0); //0随便取，不会用到，只为了初始化
    var r=re;  //浅拷贝
    var carry=0;
    while(l1!=null || l2!=null){
        var x = l1==null? 0:l1.val;
        var y = l2==null? 0:l2.val;
        r.next=new ListNode((carry+x+y)%10);
        r=r.next;
        if(carry+x+y>9){
            carry=1;
        }else{
            carry=0;
        }
        if(l1!=null){
            l1=l1.next;
        }
        if(l2!=null){
            l2=l2.next;
        }
    }
    if(carry>0){
        r.next=new ListNode(1); //最高位进1
    } 
    return re.next;
};
