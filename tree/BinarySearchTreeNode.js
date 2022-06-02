class BinarySearchTreeNode {
    /**
     * @param {BinarySearchTreeNode | null} left
     * @param {BinarySearchTreeNode | null} right
     * @param {Number} data
     * @throws Error on invalid data provided.
     */
    constructor(data, left = null, right = null) {
        if (!(left instanceof BinarySearchTreeNode) && left !== null) {
            throw Error('left value must be of type BinarySearchTreeNode or null');
        } else if (!(right instanceof BinarySearchTreeNode) && right !== null) {
            throw Error('right value must be of type BinarySearchTreeNode or null');
        } else if (typeof data !== 'number') {
            throw Error('data value must be of type Number');
        }

        this.left = left;
        this.right = right;
        this.data = data;
    }

    /**
     * Set the left child node.
     * @param {BinarySearchTreeNode | null} left
     * @return {void}
     * @throws Error on invalid data provided.
     */
    setLeft(left) {
        if (!(left instanceof BinarySearchTreeNode) && left !== null) {
            throw Error('left value must be of type BinarySearchTreeNode or null');
        }

        this.left = left;
    }

    /**
     * Return the value of the left node
     * @return {BinarySearchTreeNode | null}
     */
    getLeft() {
        return this.left;
    }

    /**
     * Set the right child node.
     * @param {BinarySearchTreeNode | null} right
     * @return {void}
     * @throws Error on invalid data provided.
     */
    setRight(right) {
        if (!(right instanceof BinarySearchTreeNode) && right !== null) {
            throw Error('right value must be of type BinarySearchTreeNode or null');
        }

        this.right = right;
    }

    /**
     * Return the value of the right node
     * @return {BinarySearchTreeNode | null}
     */
     getRight() {
        return this.right;
    }

    /**
     * Get the data contents of this node.
     * @return {Number}
     */
    getData() {
        return this.data;
    }

    /**
     * Set the data contents of this node.
     * @param {Number} data
     * @returns {void}
     */
    setData(data) {
        this.data = data;
    }
}

module.exports = BinarySearchTreeNode;
