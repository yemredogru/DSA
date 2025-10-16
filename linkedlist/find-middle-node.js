/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var length = 0;
    var curr = head;
    while (curr){
        length++;
        curr=curr.next
    }
    var mid = length % 2 != 0 ? (length+1) / 2 : (length  / 2) +1;
    curr = head;
    for (var i = 0; i < mid-1; i++) {
        curr = curr.next;
    }
    
    return curr; 
};
