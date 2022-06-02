const BinarySearchTree = require('../BinarySearchTree');

/**
    The tree we are testing with.

                    50
                /       \
            45           55
          40  47       52  57
                48   51     60
                              61
 */

const treeData = () => [50,45,40,47,48,55,52,57,51,60,61];

/**
 * @returns {BinarySearchTree}
 */
const createTree = () => {
    var tree = new BinarySearchTree();
    for (var i = 0; i < treeData().length; i++) {
        tree.insert(treeData()[i]);
    }
    return tree;
}


describe('Test Tree', () => {
    test('insert method', () => {
        var tree = createTree();
        var csv = tree.inOrder();
        var expected = treeData().sort().join(',');
        expect(csv).toBe(expected);

        expect(tree.root.getData()).toBe(50);
        // left side
        expect(tree.root.getLeft().getData()).toBe(45);
        expect(tree.root.getLeft().getLeft().getData()).toBe(40);
        expect(tree.root.getLeft().getRight().getData()).toBe(47);
        expect(tree.root.getLeft().getRight().getRight().getData()).toBe(48);
        // right side
        expect(tree.root.getRight().getData()).toBe(55);
        expect(tree.root.getRight().getLeft().getData()).toBe(52);
        expect(tree.root.getRight().getLeft().getLeft().getData()).toBe(51);
        expect(tree.root.getRight().getRight().getData()).toBe(57);
        expect(tree.root.getRight().getRight().getRight().getData()).toBe(60);
        expect(tree.root.getRight().getRight().getRight().getRight().getData()).toBe(61);

        var treeDataArr = treeData();
        treeDataArr.sort();

        expect(tree.inOrder()).toBe(treeDataArr.join(','));
    });

    test('exists method', () => {
        var tree = createTree();
        expect(tree.exists(47)).toBe(true);
        expect(tree.exists(10)).toBe(false);
    });

    test('depth method', () => {
        var tree = createTree();
        expect(tree.depth()).toBe(5);
    });

    test('getMin method', () => {
        var tree = createTree();
        expect(tree.getMin()).toBe(40);
    });

    test('getMax method', () => {
        var tree = createTree();
        expect(tree.getMax()).toBe(61);
    });

    test('truncate method', () => {
        var tree = createTree();
        tree.truncate();
        expect(tree.inOrder()).toBe('');
    });

    test('getNodeByValue method', () => {
        var tree = createTree();
        expect(tree.getNodeByValue(40).getLeft()).toBe(null);
        expect(tree.getNodeByValue(55).getLeft().getData()).toBe(52);
        expect(tree.getNodeByValue(55).getRight().getData()).toBe(57);
        expect(tree.getNodeByValue(500)).toBe(null);
    });

    test('remove method', () => {
        var tree = createTree();

        // remove single children
        tree.remove(40);
        tree.remove(61);
        expect(tree.getNodeByValue(45).getLeft()).toBe(null);
        expect(tree.getNodeByValue(60).getRight()).toBe(null);

        // refresh tree
        tree = createTree();

        tree.remove(55);
        expect(tree.getNodeByValue(50).getRight().getData()).toBe(57);
        expect(tree.getNodeByValue(52).getLeft().getData()).toBe(51);
        expect(tree.getNodeByValue(52).getRight()).toBe(null);
        expect(tree.depth()).toBe(4);

        // refresh tree
        tree = createTree();
        tree.remove(50);
        expect(tree.getNodeByValue(51).getRight().getData()).toBe(55);
        expect(tree.getNodeByValue(51).getRight().getLeft().getData()).toBe(52);
        expect(tree.getNodeByValue(51).getLeft().getData()).toBe(45);
    });

    test('inOrder method', () => {
        var tree = createTree();
        var csv = tree.inOrder();
        expect(csv).toBe('40,45,47,48,50,51,52,55,57,60,61')
    });

    test('preOrder method', () => {
        var tree = createTree();
        var csv = tree.preOrder();
        expect(csv).toBe('50,45,40,47,48,55,52,51,57,60,61');
    });

    test('postOrder method', () => {
        var tree = createTree();
        var csv = tree.postOrder();
        expect(csv).toBe('40,48,47,45,51,52,61,60,57,55,50');
    });
});
