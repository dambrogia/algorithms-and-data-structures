const Stack = require('../Stack');

describe('Test Stack', () => {
    var s = new Stack();

    test("Create stack", () => expect(s).toBeInstanceOf(Stack));
    test("New stack is empty", () => expect(s.size).toBe(0));
    test("Output should empty", () => expect(s.toString()).toBe(""));

    test("Push: 1", () => { s.push(1); expect(s.size).toBe(1); });
    test("Output: 1", () => expect(s.toString()).toBe("1"));

    test("Push: 2", () => { s.push(2); expect(s.size).toBe(2); });
    test("Output: 1 2", () => expect(s.toString()).toBe("1 2"));

    test("Push: 3", () => { s.push(3); expect(s.size).toBe(3); });
    test("Output: 1 2 3", () => expect(s.toString()).toBe("1 2 3"));
    test("Peek: 3", () => expect(s.peek()).toBe(3));

    test("Pop: 3", () => expect(s.pop()).toBe(3));
    test("Output: 1 2", () => expect(s.toString()).toBe("1 2"));

    test("Pop: 2", () => expect(s.pop()).toBe(2));
    test("Output: 1", () => expect(s.toString()).toBe("1"));

    test("Pop: 1", () => expect(s.pop()).toBe(1));
    test("Output should empty", () => expect(s.toString()).toBe(""));
});
