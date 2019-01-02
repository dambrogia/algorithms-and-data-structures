class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    /**
     * Assert this is the tail node.
     * @return {boolean}
     */
    isTail() {
        return this.next === null;
    }

    /**
     * Set the node that comes after this one within the list.
     * @param {Node} node
     */
    setNext(node) {
        this.next = node;
    }
}

module.exports = Node;
