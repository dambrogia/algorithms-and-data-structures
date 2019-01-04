const LinkedList = require('../../linked-list/js/LinkedList');

class Queue {
    constructor() {
        // Using a linked list will allow for 0(1) because we will only
        // be touching the head and tail.
        this.list = new LinkedList();
    }

    get size() {
        return this.list.size;
    }

    add(data) {
        this.list.insertTail(data);
    }

    take() {
        return this.list.removeHead();
    }

    peek() {
        return this.list.head !== null ? this.list.head.data : null;
    }

    toString() {
        return this.list.toString();
    }
}

module.exports = Queue;
