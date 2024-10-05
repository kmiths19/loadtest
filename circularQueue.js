class CircularQueue {
    constructor(capacity) {
        this.arr = new Array(capacity);
        this.capacity = capacity;
        this.front = -1
        this.rear = -1
        this.currentLength = 0
    }

    isEmpty() {
        return this.currentLength === 0
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.arr[this.rear] = element;
            this.currentLength++;
            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        } else {
            const item = this.arr[this.front];
            this.arr[this.front] = null;
            this.front = (this.front + 1) % this.capacity;
            this.currentLength -= 1;
            if (this.isEmpty()) {
                this.rear = -1;
                this.front = -1;
            }
            return item;
        }
    }
    peek() {
        if (!this.isEmpty()) {
            return this.arr[this.front]
        }
        return null;
    }

    print() {
        if (this.isEmpty()) {
            return "Queue is empty"
        } else {
            let i;
            let str = ''
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.arr[i] + " "
            }
            str += this.arr[i]
            console.log(str);
        }
    }
}

const queue = new CircularQueue(5);

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print();
console.log(queue.isFull());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.print();
console.log(queue.isFull());