const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Insert data into a node at the beginning of the list.
     * @param {object} data
     * @return {self}
     */
    insertHead(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            const oldHead = this.head;
            var newHead = new Node(data);
            oldHead.prev = newHead;
            newHead.next = oldHead;
            this.head = newHead;
        }

        this.size++;

        return this;
    }

    /**
     * Remove the last item in the list and return it's data.
     * @return {mixed} data
     */
    removeHead() {
        const originalHead = this.head;

        // One node
        if (this.head !== null && this.head.next === null) {
            this.head = null;
        // Two nodes
        } else if (this.head !== null && this.head.next.isTail()) {
            this.head = originalHead.next;
            this.tail = null;
            this.head.prev = null;
        // Three nodes or more
        } else if (this.head !== null && ! this.head.next.isTail()) {
            this.head = originalHead.next;
            this.head.prev = null;
        }

        this.size > 0 && this.size--;

        return originalHead === null ? null : originalHead.data;
    }

    /**
     * Insert data into a node that exists at the end of the list.
     * @param {object} data
     * @return {self}
     */
    insertTail(data) {
        if (this.head === null) {
            this.insertHead(data);
        } else {
            const tail = new Node(data);
            var node = this.head;
            while (! node.isTail()) node = node.next;
            tail.prev = node;
            node.next = tail;
            this.tail = tail;
            this.size++;
        }

        return this;
    }

    /**
     * Remove the last item in the list and return it's data.
     * @return {mixed} data
     */
    removeTail() {
        const originalTail = this.tail;

        // Two nodes
        if (this.tail !== null && this.tail.prev.isHead()) {
            this.tail = null;
            this.head.next = null;
            this.size--;
        // Three nodes or more
        } else if (this.tail !== null && ! this.tail.prev.isHead()) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
        }

        // One node
        return originalTail === null ? this.removeHead() : originalTail.data;
    }

    /**
     * Remove a single node by it's value.
     * @param {object} data
     * @return {self}
     */
    removeNode(data) {
        var node = this.head;
        var prevNode = null;
        var nextNode = null;

        while (node !== null) {
            if (node.data === data && node.isTail()) {
                this.removeTail();
                break;
            } else if (node.data === data && ! node.isTail()) {
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
                this.size--;
                break;
            }

            prevNode = node;
            node = node.next;
            nextNode = node.next;
        }

        return this;
    }

    /**
     * Return a string made up of the data from all the nodes in the list.
     * @return {string}
     */
    toString() {
        var str = '';

        if (this.head !== null) {
            var node = this.head;

            do {
                str += `${node.data} `;
                node = node.next;
            } while (node !== null);

            // Remove the last empty space
            str = str.substr(0, str.length - 1);
        }

        return str;
    }
}

module.exports = LinkedList;
