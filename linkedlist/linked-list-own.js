/**
 * @param {number} val
 * @param {Node|null} [next=null]
 */
var Node = function(val, next = null) {
    this.val = val;
    this.next = next;
};


var MyLinkedList = function() {
    this.head = null; 
    this.tail = null; 
    this.length = 0;  
};

/** * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) { 
        return -1;
    }
    
    let current = this.head;
    let currIndex = 0;
    
    while (currIndex < index) {
        current = current.next;
        currIndex++;
    }
    
    return current.val;
};

/** * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val, this.head); 
    this.head = newNode;
    
    if (this.length === 0) {
        this.tail = newNode; 
    }
    
    this.length++;
};

/** * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);
    
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;     
    }
    
    this.length++;
};

/** * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.length) {
        return;
    }
    
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    
    if (index === this.length) {
        this.addAtTail(val);
        return;
    }

    let current = this.head;
    let prev = null;
    let currIndex = 0;
    
    while (currIndex < index) {
        prev = current;         
        current = current.next; 
        currIndex++;
    }
    
    const newNode = new Node(val, current); 
    prev.next = newNode;                   
    this.length++;
};

/** * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.length) {
        return;
    }
    
    if (index === 0) {
        this.head = this.head.next;
        if (this.length === 1) {
            this.tail = null;
        }
        this.length--;
        return;
    }
    
    let current = this.head;
    let prev = null;
    let currIndex = 0;
    
    while (currIndex < index) {
        prev = current;
        current = current.next; 
        currIndex++;
    }
    
    prev.next = current.next;
    
    if (current === this.tail) {
        this.tail = prev;
    }
    
    this.length--;
};

/** * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
