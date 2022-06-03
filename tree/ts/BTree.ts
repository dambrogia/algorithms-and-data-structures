import BTreeNode from "./BTreeNode";

export default class BTree {

    root: BTreeNode | null;
    order: number;

    constructor(order: number) {
        this.order = order;
        this.root = null;
    }

    /**
     * Insert a value into the tree.
     */
    public insert(value: number): void {

    }

    /**
     * Search for a value in the tree and return the node.
     */
    public search(value: number): BTreeNode | null {
        const _traverse = (node: BTreeNode | null): BTreeNode | null  => {
            if (node?.values.includes(value)) {
                return node;
            } else if (node === null || node.chLength === 0) {
                return null;
            }

            var i = 0;
            while (i < node.length && node.values[i] < value) {
                i++;
            }

            return _traverse(node.children[i]);
        };

        return _traverse(this.root);
    }

    /**
     * Delete value from tree.
     */
    public delete(value: number): boolean {
        return false;
    }

    /**
     * Delete a value from a node within the tree.
     */
    private deleteFromNode(node: BTreeNode, value: number): boolean {
        return false;
    }

    /**
     * Transfer a value
     */
    private transfer(source: BTreeNode, dest: BTreeNode): void {

    }





}
