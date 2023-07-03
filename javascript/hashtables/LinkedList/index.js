'use strict';

const { insertAfter } = require("cheerio/lib/api/manipulation");

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    append(value) {
        let node = new Node(value);
        if(!this.head) {
            this.head = node;
            return
        }
        let current = this.head
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }

    traversal() {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

    includes(value) {
        let current = this.head;
        while(current) {
            if(current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    toString() {
        let result = '';
        let current = this.head;
        while(current) {
            result += `{ ${current.value} } -> `;
            current = current.next
        }

        result += 'null';
        return result;
    }

    insertBefore(value, newValue) {
  if (!this.head) {
    this.insert(newValue);
    return;
  }

  if (this.head.value === value) {
    this.insert(newValue);
    return;
  }

  let current = this.head;
  while (current) {
    if (current.next && current.next.value === value) {
      let newNode = new Node(newValue);
      newNode.next = current.next;
      current.next = newNode;
      return;
    }
    current = current.next;
  }

  throw new Error('Value not found');
}

}

let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

list.insertBefore('c', 1);

module.exports = LinkedList