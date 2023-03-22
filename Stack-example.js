class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    // peek at the first item in the stack
    console.log(this.top);
    return this.top;
  }
  push(value) {
    // adding a value to the stack
    // create the node
    const newNode = new Node(value);
    this.length++;
    // if no nodes make this the top node
    if (!this.top) {
      this.top = newNode;
      // must be newNode not this.top!
      this.bottom = newNode;
      return this;
    }
    // if there is already a top
    // newNode next must be current top
    newNode.next = this.top;
    //reassign top
    this.top = newNode;
    return this;
  }

  pop() {
    // if there are no nodes
    if (!this.top) return null;
    // if only one node left
    if (this.top === this.bottom) {
      const removedNode = this.top;
      this.top = null;
      this.bottom = null;
      return removedNode;
    }
    // more than one node left
    const removedNode = this.top;
    this.length--;
    this.top = this.top.next;
    return this.top;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("zeroToMastery");
myStack.push("algos");
myStack.pop();
myStack.peek();
console.log(myStack);
