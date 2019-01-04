const Queue = require('../Queue');

describe('Test Queue', () => {
    test("Creating Queue", () => expect(true).toBe(true));

    var q = new Queue();

    test("Creating Queue", () => expect(q).toBeInstanceOf(Queue));
    test("New queue should be empty", () => expect(q.size).toBe(0));
    test("Output should empty", () => expect(q.toString()).toBe(""));

    test("Add: 1", () => { q.add(1); expect(q.size).toBe(1); });
    test("Output should be: 1", () => expect(q.toString()).toBe("1"));

    test("Add: 2", () => { q.add(2); expect(q.size).toBe(2); });
    test("Output should be: 1 2", () => expect(q.toString()).toBe("1 2"));

    test("Add: 3", () => { q.add(3); expect(q.size).toBe(3); });
    test("Output should be: 1 2 3", () => expect(q.toString()).toBe("1 2 3"));

    test("Take", () => expect(q.take()).toBe(1));
    test("Output should be: 2 3", () => expect(q.toString()).toBe("2 3"));

    test("Peek", () => { expect(q.peek()).toBe(2); expect(q.size).toBe(2) });
    test("Output should be: 2 3", () => expect(q.toString()).toBe("2 3"));

    test("Add: 3", () => { q.add(4); expect(q.size).toBe(3); });
    test("Output should be: 2 3 4", () => expect(q.toString()).toBe("2 3 4"));

    test("Take", () => expect(q.take()).toBe(2));
    test("Output should be: 3 4", () => expect(q.toString()).toBe("3 4"));

    test("Take", () => expect(q.take()).toBe(3));
    test("Output should be: 4", () => expect(q.toString()).toBe("4"));

    test("Take", () => expect(q.take()).toBe(4));
    test("Output should be empty", () => expect(q.toString()).toBe(""));
});
