class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    /**
     * Assert this is the tail node.
     * @return {boolean}
     */
    isTail() {
        return this.next === null;
    }

    /**
     * Assert this is the head node.
     * @return {boolean}
     */
    isHead() {
        return this.prev === null;
    }
}

module.exports = Node;
