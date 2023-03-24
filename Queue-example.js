class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// first in first out
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    // see first in queue
    return this.first;
  }
  enqueue(value) {
    // create new node
    const newNode = new Node(value);
    //if first node added
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return this;
    } else {
      // must add newest Node to last*** from behind
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
      return this;
    }
  }
  dequeue() {
    // if no nodes in queue
    if (this.first === null) return null;
    // if only one node in queue
    if (this.first === this.last) {
      const removedNode = this.first;
      this.first = null;
      this.last = null;
      this.length = 0;
      return removedNode;
    }
    // dequeue first in first out***
    const removedNode = this.first;
    this.first = this.first.next;
    this.length--;
    return removedNode;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);

// Common Question: implement a Queue using a Stacks
