import BTree from "./BTree";

export default class BTreeNode {

    values: Array<number>;
    children: Array<BTreeNode>;
    parent: BTreeNode | null;
    tree: BTree | null;

    constructor() {
        this.values = [];
        this.children = [];
        this.parent = null;
        this.tree = null;
    }

    get length(): number {
        return this.values.length;
    }

    get chLength(): number {
        return this.children.length;
    }

    /**
     * Insert a sorted value into a node.
     */
    public insertValue(value: number): void {
        var i = 0;

        while (i < this.values.length && this.values[i] < value) {
            i++;
        }

        this.values.splice(i, 0, value);
    }

    /**
     * Remove an index within the values of the node.
     */
    public removeIndex(index: number): boolean {
        if (index >= this.values.length) {
            return false;
        }

        this.values.splice(index, 1);

        return true;
    }

    /**
     * Remove an index within the node by its value.
     */
    public removeValue(value: number): boolean {
        for (var i = 0; i < this.length; i++) {
            if (value === this.values[i]) {
                return this.removeIndex(i);
            }
        }

        return false;
    }

    /**
     * Add a child to the node.
     */
    public addChild(node: BTreeNode, position: number): void {
        this.children.splice(position, 0, node);
        node.parent = this;
    }

    /**
     * Remove a child from the node.
     */
    public removeChild(position: number): boolean {
        if (position >= this.children.length) {
            return false;
        }

        var splice = this.children.splice(position, 1);
        splice[0].parent = null;

        return true;
    }
}
