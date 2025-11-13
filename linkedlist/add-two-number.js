var addTwoNumbers = function(l1, l2) {
    let l1curr = l1;
    let l2curr = l2;
    let dummyHead = new ListNode(0, null);
    let current = dummyHead;
    let carry = 0; 
    
    while (l1curr || l2curr || carry) {
        let val1 = l1curr ? l1curr.val : 0;
        let val2 = l2curr ? l2curr.val : 0;
        
        let sum = val1 + val2 + carry;
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if (l1curr) l1curr = l1curr.next;
        if (l2curr) l2curr = l2curr.next;
    }
    
    return dummyHead.next;
};
