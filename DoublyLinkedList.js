class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    // Nodes in DoublyLinked Lists have prev key value pairs
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    // DoublyLinked Lists have prev key value pairs
    this.head = { value, next: null, prev: null };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // create newNode -> prev: null & next: null
    const newNode = new Node(value);
    // create variable for this.tail
    const secondToLast = this.tail;
    // assign tail variable next to newNode
    secondToLast.next = newNode;
    // assign newNode's prev to tail
    newNode.prev = secondToLast;
    // assign tail to newNode
    this.tail = newNode;
    //increase length
    this.length++;
    return this;
  }
  prepend(value) {
    // adding to the beginning of DoublyLinked List
    // value, next= null; prev = null;
    const newNode = new Node(value); // prev = null, next = null;
    // assign prev for this.head
    this.head.prev = newNode;
    // current head becomes next
    newNode.next = this.head;
    // head becomes newNode
    this.head = newNode;
    //increase lenght
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length - 1) return this.append(value);
    if (index === 0) return this.prepend(value);
    const newNode = new Node(value);
    let count = 0;
    let current = this.head;
    while (current !== null) {
      if (count === index) {
        // add value at index shifting the current value back
        // change current.prev's next to newNode
        // change newNode prev to current.prev
        const temp = current;
        // prev node must point to newNode and vis verca
        current.prev.next = newNode;
        newNode.prev = current.prev;
        // newNode must point next to current
        newNode.next = temp;
        temp.prev = newNode;
        // add to length
        this.length++;
        this.printList();
        return this;
      }
      count++;
      current = current.next;
    }
  }
  printList() {
    const arr = [];
    let current = this.head;
    // iterate thru linkedList
    while (current !== null) {
      arr.push(current.value);
      // shift to next on each iteration
      current = current.next;
    }
    console.log({ arr });
    return arr;
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      //need to alter prev value when assigning the second node as the head
      this.head.prev = null;
      this.length--;
      return this;
    }
    if (index >= this.length - 1) {
      this.tail = this.tail.prev;
      // assign prev to tail and make sure its next points to null now
      this.tail.next = null;
      this.length--;
      return this;
    }
    let count = 0;
    let current = this.head;
    while (current !== null) {
      if (index === count) {
        // assign current to vairables to nodes before and after current
        const beforeNode = current.prev;
        const afterNode = current.next;
        //assign before node's next to afternode
        beforeNode.next = afterNode;
        // assign afterNode's prev to beforeNode
        afterNode.prev = beforeNode;
        this.length--;
        return this;
      }
      count++;
      current = current.next;
    }
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(1, 99);
myLinkedList.insert(20, 88);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.printList();

// DOUBLY LINKED LISTS MUST KNOW
// requires more memory in storage
//can traverse back and forth
