class Stack {
    constructor() {
        this.stack = [];
    }

    /**
     * Allow for viewing of stack length.
     * @return {int}
     */
    get size() {
        return this.stack.length;
    }


    /**
     * Push data to the end of the stack.
     * @param {mixed} data
     * @return {void}
     */
    push(data) {
        this.stack.push(data);
    }

    /**
     * Delete the item from the end of the stack.
     * @return {mixed}
     */
    pop() {
        return this.stack.pop();
    }

    /**
     * View the value of the item at the end of the stack without mutating
     * the structure of the stack.
     * @return {mixed}
     */
    peek() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * Return a string of the stack.
     * @return {string}
     */
    toString() {
        var str = '';
        this.stack.forEach(val => str += `${val} `);
        // Remove the last empty space
        return str.substr(0, str.length - 1);
    }
}

module.exports = Stack;
