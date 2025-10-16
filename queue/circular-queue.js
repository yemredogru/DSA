/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.listLength = k;
    this.list = new Array(k); 
    this.head = -1;
    this.tail = -1;
    this.length = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.length == this.listLength){
        return false;
    }
    if(this.head == -1){
        this.head = 0;
    }
    this.tail = (this.tail + 1) % this.listLength;
    this.list[this.tail] = value;
    this.length++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()){
        return false;
    }
    this.head = (this.head + 1) % this.listLength; 
    this.length--;
    if(this.length == 0){  
        this.head = -1;
        this.tail = -1;
    }
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()){
        return -1;
    }
    return this.list[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()){
        return -1;
    }
    return this.list[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.length == 0; 
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.length == this.listLength;
};

