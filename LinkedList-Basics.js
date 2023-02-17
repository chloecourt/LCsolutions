/**
 *class Node {
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
}
 */

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // O (1)
    if (this.tail === null) return;
    const temp = this.tail;
    this.tail = this.tail.next = { value, next: null };
    this.length++;
    // need to return linkedList
    return this;
  }
  prepend(value) {
    // O (1)
    const newSecondNode = this.head;
    this.head = { value, next: newSecondNode };
    this.length++;
    return this;
  }
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  remove(index) {
    // O (n) because you have to traverse
    if (index === 0) {
      const removedHead = this.head;
      this.head = this.head.next;
      return removedHead;
    }
    let current = this.head,
      next;
    let prev = this.head;
    let i = 1;
    while (current !== null) {
      if (i === index) {
        if (current === this.tail) {
          prev.next = null;
          this.tail = prev;
          this.length--;
          console.log("remove method for tail returning", current);

          return current;
        }
        prev.next = current.next;
        this.length--;
        console.log("remove method returning", current);
        return current;
      }
      i++;
      prev = current;
      current = current.next;
    }
  }
  insert(index, value) {
    // can return undefined if index does not exist or is negative
    if ((index > this.length - 1) | (index < 0)) return undefined;
    // if index is the tail return append()
    if (index === this.length - 1) return this.append(value);
    // if index is 0 return prepend()
    if (index === 0) return this.prepend(value);
    //otherwise loop through linkedList

    // current is initialized at head
    let current = this.head.next;
    // initialize prev
    let prev = this.head;
    // iterate through linked in until reached index value
    for (let i = 1; i < this.length; i++) {
      if (i === index) {
        // save front and end
        prev.next = { value, next: current };
        this.length++;
        return this.printList();
      }
      prev = current;
      current = current.next;
    }
    // once reached index value need to save tail section

    // add new node to head section and add nex to tail node
    // increase length
  }
}

const firstLinkedList = new LinkedList(7);
firstLinkedList.append(5);
firstLinkedList.append(16);
firstLinkedList.prepend(1);
firstLinkedList.prepend(0);
console.log("before insert: ", firstLinkedList.printList());
firstLinkedList.insert(2, "a");
firstLinkedList.insert(3, "b");
firstLinkedList.insert(3, "c");
console.log("printed list before removal:", firstLinkedList.printList());
firstLinkedList.remove(2);
firstLinkedList.remove(3);
console.log("printed list:", firstLinkedList.printList());

// console.log("firstLinkedList: ", firstLinkedList);
