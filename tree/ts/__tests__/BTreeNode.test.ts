import BTreeNode from '../BTreeNode';

describe('Test BTreeNode', () => {
    const createNode = (): BTreeNode => new BTreeNode;

    test('insert method', () => {
        const node = createNode();
        node.insertValue(3);
        node.insertValue(1);
        node.insertValue(2);

        expect(node.values.join(',')).toBe('1,2,3');
    });

    test('removeIndex method', () => {
        const node = createNode();
        [1,2,3,4,5].forEach((i: number) => node.insertValue(i));

        expect(node.removeIndex(0)).toBe(true);
        expect(node.values.join(',')).toBe([2,3,4,5].join(','));
        expect(node.removeIndex(10)).toBe(false);
    });

    test('removeValue method', () => {
        const node = createNode();
        [1,2,3,4,5].forEach((i: number) => node.insertValue(i));

        expect(node.removeValue(3)).toBe(true);
        expect(node.values.join(',')).toBe([1,2,4,5].join(','));
        expect(node.removeIndex(10)).toBe(false);
    });

    test('addChild method and removeChild method', () => {
        const node = createNode();
        node.insertValue(1);

        const node2 = createNode();
        node2.insertValue(2);

        node.addChild(node2, 0);
        expect(node.children.at(0)?.values.join(',')).toBe('2');

        node.removeChild(0);
        expect(node.children.at(0)?.values.join(',')).toBe(undefined);
    });
});
