/**
 * Node Class has:
 * constructor that takes a parameter "value"
 * this.value = value (in constructor)
 * this.next = null (in constructor)
 */
class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * LinkedList Class has:
 * a constructor which takes parameter value
 * this.head which initialized first node { value: value, next: null }
 * this.head = this.tail
 * this.length = 1
 * remember length is one when first instance is createdf
 */
class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.head = this.tail;
    this.length = 1;
  }
  append(value) {
    this.tail.next = new NewNode(value);
    this.tail = this.tail.next;
    this.length++;
    return this;
  }
  prepend(value) {
    const temp = this.head;
    this.head = new NewNode(value);
    this.head.next = temp;
    this.length++;
    return this;
  }
  remove(index) {
    if (this.length === 1) return "only one node in linkedlist";
    let current = this.head;
    let previous = null;
    let i = 0;
    while (current) {
      if (i === index) break;
      previous = current;
      current = current.next;
      i++;
    }
    if (!current) {
      previous.next = null;
      return this;
    }
    previous.next = current.next;
    this.length--;
    return;
  }
  insert(index) {}
  print() {}
}
