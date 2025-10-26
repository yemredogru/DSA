//https://leetcode.com/problems/rotate-list/?envType=problem-list-v2&envId=linked-list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;
    
    var length = 1;
    var tail = head;
    
    while(tail.next) {
        tail = tail.next;
        length += 1;
    }    
    k = k % length;
    if (k === 0) return head;
    
    var newTail = head;
    var stepsToNewTail = length - k - 1;
    
    for (var i = 0; i < stepsToNewTail; i++) {
        newTail = newTail.next;
    }
    
    var newHead = newTail.next;
    
    newTail.next = null;   
    tail.next = head;
    
    return newHead;
};
