const LinkedList = require('./linkedListWithTails');

class LinkedListStack {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        this.list.prepend(value)
    }

    pop() {
        return this.list.removeFromFirst()
    }

    peek() {
        return this.head.value;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize()
    }

    print() {
        return this.list.print()
    }
}

let linkedListStack = new LinkedListStack()
linkedListStack.push(20);
linkedListStack.push(30);
linkedListStack.print()
console.log(linkedListStack.getSize());
// linkedListStack.pop();
// linkedListStack.print()
console.log(linkedListStack.getSize());
