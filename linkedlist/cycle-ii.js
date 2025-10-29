/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return null;
    
    let slow = head, fast = head; // find cycle using Floyd’s Cycle Finding Algorithm
    
    while(fast && fast.next){
        slow = slow.next;   
        fast = fast.next.next; 
        
        if(slow === fast){
            slow = head;
            let index = 0;
            
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
                index++;
            }
            
            return slow;
        }
    }
    
    return null;
};
