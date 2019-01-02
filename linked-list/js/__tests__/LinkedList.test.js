const LinkedList = require('../LinkedList');

describe('Test Linked List', () => {

    var ll = new LinkedList();

    /**
     * These tests are just for basic functionality. There are no edge cases
     * being tested. Here are some edge cases to consider:
     *  Insert tail on empty list
     *  Remove on empty list
     *  Remove item that occurs twice in list
     *  Remove item that doesn't exist in list
     * Not all of these will throw errors, but should be considered on what needs
     * to happen for your specific use-case.
     */

    test("Creating Linked List", () => expect(ll).toBeInstanceOf(LinkedList));

    test("New link list is empty", () => expect(ll.size).toBe(0));
    test("Output should empty", () => expect(ll.toString()).toBe(""));

    test("Insert head: 2", () => expect(ll.insertHead(2).size).toBe(1));
    test("Output should be: 2", () => expect(ll.toString()).toBe("2"));

    test("Insert tail: 4", () => expect(ll.insertTail(4).size).toBe(2));
    test("Output should be: 2 4", () => expect(ll.toString()).toBe("2 4"));

    test("Insert head: 1", () => expect(ll.insertHead(1).size).toBe(3));
    test("Output should be: 1 2 4", () => expect(ll.toString()).toBe("1 2 4"));

    test("Insert tail: 5", () => expect(ll.insertTail(5).size).toBe(4));
    test("Output should be: 1 2 4 5", () => expect(ll.toString()).toBe("1 2 4 5"));

    test("Remove node: 4", () => expect(ll.removeNode(4).size).toBe(3));
    test("Output should be: 1 2 5", () => expect(ll.toString()).toBe("1 2 5"));

    test("Remove tail (5)", () => expect(ll.removeTail().size).toBe(2));
    test("Output should be: 1 2", () => expect(ll.toString()).toBe("1 2"));

    test("Remove head (1)", () => expect(ll.removeHead().size).toBe(1));
    test("Output should be: 2", () => expect(ll.toString()).toBe("2"));

    test("Insert head: 1", () => expect(ll.insertHead(1).size).toBe(2));
    test("Output should be: 1 2", () => expect(ll.toString()).toBe("1 2"));

    test("Insert tail: 3", () => expect(ll.insertTail(3).size).toBe(3));
    test("Output should be: 1 2 3", () => expect(ll.toString()).toBe("1 2 3"));

});
