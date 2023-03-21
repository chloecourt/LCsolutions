// reverse a singly LinkedList

class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // add a new Node to tail.next
    this.tail.next = new NewNode(value);
    // redeclare tail to the last node
    // in constructor next is null *
    this.tail = this.tail.next;
    // increase length
    this.length++;
    return this;
  }

  reverse() {
    if (this.length === 1) return this;
    // initialize current
    let current = this.head;
    // initialize previous
    let previous = null;
    // redeclare head as tail
    this.tail = this.head;
    // while current is not null
    while (current) {
      // save next
      const next = current.next;
      // current's next must be previous
      current.next = previous;
      // previous value is current
      previous = current;
      //current is next value
      current = next;
    }
    // when current becomes null
    // previous is the head
    this.head = previous;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.reverse();
console.log(myLinkedList);

//https://www.youtube.com/watch?v=hMnwCgnfND4
