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
            newHead.next = oldHead;
            this.head = newHead;
        }

        this.size++;

        return this;
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
            node.next = tail;
            this.size++;
        }

        return this;
    }

    /**
     * Remove a single node by it's value.
     * @param {object} data
     * @return {self}
     */
    removeNode(data) {
        var node = this.head;
        var lastNode = null;

        while (node !== null) {
            if (node.data === data && node.next === null) {
                this.removeTail();
            } else if (node.data === data && node.next !== null) {
                lastNode.next = node.next;
                this.size--;
                break;
            }

            lastNode = node;
            node = node.next;
        }

        return this;
    }

    /**
     * Remove the last node in the list
     * @return {self}
     */
    removeTail() {
        var node = this.head;

        if (node.isTail()) {
            this.head = null;
        } else {
            while (! node.next.isTail()) node = node.next;
            node.next = null;
            this.size--;
        }

        return this;
    }

    /**
     * Remove the first node in the list
     * @return {self}
     */
    removeHead() {
        if (this.head !== null) {
            this.head = this.head.isTail() ? null : this.head.next;
            this.size--;
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
