const BinarySearchTreeNode = require('./BinarySearchTreeNode');
const Node = require('./BinarySearchTreeNode');

class BinarySearchTree {

    /**
     * @param {BinarySearchTreeNode | null} root
     */
    constructor(root = null) {
        this.root = root;
    }

    /**
     * Insert an integer into the tree.
     * @param {Number} n
     * @returns {void}
     */
    insert(n) {
        /**
         * Private traversal function for recursion
         * @param {BinarySearchTreeNode} rootNode
         * @returns {BinarySearchTreeNode}
         */
        const _traverse = node => {
            if (node === null) {
                return new Node(n, null, null);
            }

            if (n < node.getData()) {
                node.setLeft(_traverse(node.getLeft()));
                return node;
            } else if (n > node.getData()) {
                node.setRight(_traverse(node.getRight()));
                return node;
            } // else n === rootNode.getData() we do nothing.
        };

        this.root = _traverse(this.root);
    }

    depth() {
        /**
         * @param {BinarySearchTreeNode} node
         */
        const _traverse = (node) => {
            if (node === null) {
                return 0;
            }

            const left = _traverse(node.getLeft());
            const right = _traverse(node.getRight());

            return Math.max(left, right) + 1;
        };

        return _traverse(this.root);
    }

    /**
     * Get the minimum value in the tree.
     * @returns {Number}
     */
    getMin() {
        var node = this.root;

        while (node.getLeft() !== null) {
            node = node.getLeft();
        }

        return node.getData();
    }

    /**
     * Get the maximum value in the tree.
     * @returns {Number}
     */
    getMax() {
        var node = this.root;

        while (node.getRight() !== null) {
            node = node.getRight();
        }

        return node.getData();
    }

    /**
     * Truncate the nodes, emptying the data in the tree.
     * @returns {void}
     */
    truncate() {
        this.root = null;
    }

    /**
     * Get a node by the value passed.
     * @param {Number} n
     * @returns {BinarySearchTreeNode | null}
     */
    getNodeByValue(n) {
        /**
         * Private function to traverse tree recursively.
         * @param {BinarySearchTreeNode} node
         */
        const _traverse = (node) => {
            if (node === null) {
                return null;
            } else if (n < node.getData()) {
                return _traverse(node.getLeft());
            } else if (n > node.getData()) {
                return _traverse(node.getRight());
            } else {
                return node;
            }
        };

        return _traverse(this.root);
    }

    remove(n) {
        /**
         * Private function to traverse tree recursively.
         * @param {BinarySearchTreeNode} node
         */
        const _traverseRemoval = (m, node) => {
            if (node === null) {
                return null;
            }

            if (m == node.getData()) {
                if (node.getLeft() === null && node.getRight() === null) {
                    // no children
                    return null;
                } else if (node.getRight() === null) {
                    // only left child
                    return node.getLeft();
                } else if (node.getLeft() === null) {
                    // only right child
                    return node.getRight();
                }
                // node has two children -- grab left most (min val) node of right child.
                var replacementNode =  node.getRight();
                while (replacementNode.getLeft() !== null) {
                    replacementNode = replacementNode.getLeft();
                }
                // replace the data on the node
                node.setData(replacementNode.getData());
                // replace the references to the children.
                node.setRight(_traverseRemoval(replacementNode.getData(), node.getRight()));
                return node;
            } else if (m < node.getData()) {
                // traverse left to find node matching value.
                node.setLeft(_traverseRemoval(m, node.getLeft()));
                return node;
            } else {
                // traverse right to find node matching value.
                node.setRight(_traverseRemoval(m, node.getRight()));
                return node;
            }
        };

        return this.root = _traverseRemoval(n, this.root);
    }

    /**
     * Assert if a value exists in the tree or not.
     * @param {Number} n
     * @returns {boolean}
     */
    exists(n) {
        var node = this.root;
        while (node !== null) {
            if (n === node.getData()) {
                return true;
            }

            node = n < node.getData() ? node.getLeft() : node.getRight();
        }

        return false;
    }

    /**
     * Get items in "in order" fashion - left, root, right
     * @returns {String}
     */
     inOrder() {
        /**
         * Private function to traverse tree recursively.
         * @param {BinarySearchTreeNode} node
         * @returns {Array}
         */
        const _traverse = node => {
            if (node === null) {
                return [];
            }

            const left = _traverse(node.getLeft());
            const root = [ node.getData() ];
            const right = _traverse(node.getRight());
            return left.concat(root, right);
        }

        return _traverse(this.root).join(',')
    }

    /**
     * Get items in "pre order" fashion - root, left, right
     * @returns {String}
     */
    preOrder() {
        /**
         * Private function to traverse tree recursively.
         * @param {BinarySearchTreeNode} node
         * @returns {Array}
         */
        const _traverse = node => {
            if (node === null) {
                return [];
            }

            const left = _traverse(node.getLeft());
            const root = [ node.getData() ];
            const right = _traverse(node.getRight());
            return root.concat(left, right);
        }

        return _traverse(this.root).join(',')
    }

    /**
     * Get items in "post order" fashion - left, right, root
     * @returns {String}
     */
    postOrder() {
        /**
         * Private function to traverse tree recursively.
         * @param {BinarySearchTreeNode} node
         * @returns {Array}
         */
        const _traverse = node => {
            if (node === null) {
                return [];
            }

            const left = _traverse(node.getLeft());
            const root = [ node.getData() ];
            const right = _traverse(node.getRight());
            return left.concat(right, root);
        }

        return _traverse(this.root).join(',');
    };
}

module.exports = BinarySearchTree;
