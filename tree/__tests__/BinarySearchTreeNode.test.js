const Node = require('../BinarySearchTreeNode');

describe('Test Node', () => {
    // used initially for
    const n1 = new Node(1, null, null);
    const n3 = new Node(3, null, null);
    const n2 = new Node(2, n1, n3);

    test('Create node', () => {
        expect(n1).toBeInstanceOf(Node);
        expect(n2).toBeInstanceOf(Node);
        expect(n3).toBeInstanceOf(Node);
    });

    test('getData method', () => {
        expect(n1.getData()).toBe(1);
        expect(n2.getData()).toBe(2);
        expect(n3.getData()).toBe(3);
    });

    test('getLeft method', () => {
        expect(n1.getLeft()).toBeNull();
        expect(n2.getLeft()).toBe(n1);
        expect(n3.getLeft()).toBeNull();
    });

    test('getRight method', () => {
        expect(n1.getRight()).toBeNull();
        expect(n2.getRight()).toBe(n3);
        expect(n3.getRight()).toBeNull();
    });

    const n4 = new Node(4, null, null);
    const n0 = new Node(0, null, null);

    test('setRight method', () => {
        n3.setRight(n4);
        expect(n3.getRight()).toBe(n4);
    });

    test('setLeft method', () => {
        n1.setLeft(n0);
        expect(n1.getLeft()).toBe(n0);
    });
});
