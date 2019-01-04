const LinkedList = require('../LinkedList');

describe('Test Linked List', () => {

    var ll = new LinkedList();

    /**
     * These tests are just for basic functionality. There are no edge cases
     * being tested. Here are some edge cases to consider:
     *  Remove on empty list
     *  Remove item that occurs twice in list
     *  Remove item that doesn't exist in list
     * Not all of these will throw errors, but should be considered on what needs
     * to happen for your specific use-case.
     */

    test("Creating Linked List", () => {
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.size).toBe(0);
        expect(ll.toString()).toBe("");
    });

    test("Insert head", () => {
        expect(ll.insertHead(2).size).toBe(1);
        expect(ll.toString()).toBe("2");
    });

    test("Insert tail", () => {
        expect(ll.insertTail(4).size).toBe(2);
        expect(ll.toString()).toBe("2 4");
    });

    test("Insert head", () => {
        expect(ll.insertHead(1).size).toBe(3);
        expect(ll.toString()).toBe("1 2 4");
    });

    test("Insert tail", () => {
        expect(ll.insertTail(5).size).toBe(4);
        expect(ll.toString()).toBe("1 2 4 5");
    });

    test("Remove node", () => {
        expect(ll.removeNode(4).size).toBe(3);
        expect(ll.toString()).toBe("1 2 5");
    });

    test("Remove tail", () => {
        expect(ll.removeTail()).toBe(5);
        expect(ll.toString()).toBe("1 2");
    });

    test("Remove head", () => {
        ll.removeHead();
        expect(ll.size).toBe(1);
        expect(ll.toString()).toBe("2");
    });

    test("Insert head", () => {
        expect(ll.insertHead(1).size).toBe(2);
        expect(ll.toString()).toBe("1 2");
    });

    test("Insert tail", () => {
        expect(ll.insertTail(3).size).toBe(3);
        expect(ll.toString()).toBe("1 2 3");
    });

    test("Head.next.next.data = 3", () => expect(ll.head.next.next.data).toBe(3));
    test("Tail.prev.prev.data = 1", () => expect(ll.tail.prev.prev.data).toBe(1));

    test("Remove head", () => {
        expect(ll.removeHead()).toBe(1);
        expect(ll.toString()).toBe("2 3");
        expect(ll.removeHead()).toBe(2);
        expect(ll.toString()).toBe("3");
        expect(ll.removeHead()).toBe(3);
        expect(ll.toString()).toBe("");
    });

    test("Remove tail", () => {
        ll.insertTail(1).insertTail(2).insertTail(3).insertTail(4);
        expect(ll.toString()).toBe("1 2 3 4");

        expect(ll.removeTail()).toBe(4);
        expect(ll.toString()).toBe("1 2 3");

        expect(ll.removeTail()).toBe(3);
        expect(ll.toString()).toBe("1 2");

        expect(ll.removeTail()).toBe(2);
        expect(ll.toString()).toBe("1");

        expect(ll.removeTail()).toBe(1);
        expect(ll.toString()).toBe("");
    });

    test("Insert tail on empty list", () => {
        ll.insertTail(1)
        expect(ll.toString()).toBe("1");
    });
});
