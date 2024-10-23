const LinkedList = require('./linkedListWithTails');

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList()
    }

    enqueue(value) {
        this.list.append(value)
    }

    dequeue() {
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

let linkedListStack = new LinkedListQueue()
linkedListStack.enqueue(20);
linkedListStack.enqueue(30);
linkedListStack.print()
console.log(linkedListStack.getSize());
linkedListStack.dequeue();
linkedListStack.print()
console.log(linkedListStack.getSize());
