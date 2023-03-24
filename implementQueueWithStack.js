// implement a Queue using a stack

/*
LOGIC : 
- when adding a value, we iterate thru first array removing/ pooping off the last value and adding pushing them to the last array therefore, first[0] becomes last[last.length -1], where we add the new Node

Conversely, when removing a node, we need to iterate over the last array popping off the last value. Once all the nodes are in the first array we can pop off the last, node, which would be the first added 

imagine having only the function pop to remove the first node in an array*** you would need to use a second array to reorder the first array to use pop to remove the right node 
*/

class QueueStack {
  constructor() {
    this.first = [];
    this.last = [];
    this.empty = true;
  }
  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    //adding new Node to the end of this.last array
    this.last.push(value);
    return this;
  }
  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    // if no nodes
    if (!this.first.length & !this.last.length) {
      return null;
    }
    // if you just enqueued
    if (this.last.length) {
      return this.last[0];
    }
    // if you just dequeued
    if (this.first.length) {
      return this.first[this.first.length - 1];
    }
  }
}

const myQueueStack = new QueueStack();
myQueueStack.enqueue(1);
myQueueStack.enqueue(2);
myQueueStack.enqueue(3);
console.log(myQueueStack);
