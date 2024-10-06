class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return `The index: ${index} is not in the LIST!`;
        }
        if (index === 0) {
            //Call the prepend method to add one in the beginning of the LIST
            this.prepend(value);
        }
        if (index > 0 && index <= this.size) {
            let node = new Node(value);
            let prevNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                prevNode = prevNode.next
            }
            node.next = prevNode.next;
            prevNode.next = node;
            this.size++
        }
    }

    removeFromIndex(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next
        }
        this.size--
        return removedNode
    }

    removeByValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                let removedNode = prev.next;
                prev.next = removedNode.next
                this.size--;
                return removedNode;
            }
            return null
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let currentNode = this.head;
            let listValues = '';
            while (currentNode) {
                listValues += `${currentNode.value} `;
                currentNode = currentNode.next
            }
            console.log(listValues);
        }
    }
}

let list = new LinkedList();
console.log("Is empty: ", list.isEmpty());
console.log("Size of the list: ", list.getSize());
list.print()
list.append(10)
list.append(20)
list.insert(40, 1)
list.print()
console.log(list.removeByValue(60))
list.print()