'use strict';

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    // Other methods of the LinkedList class...

    kthFromEnd(k) {
        if (!this.head || k <= 0) {
          return null;
        }
        let current = this.head;
        let currentTwo = this.head;
        for (let i = 0; i < k; i++) {
          if (current) {
            current= current.next;
          } else {
            return null;
          }
        }
        while (current) {
          currentTwo = currentTwo.next;
          current= current.next;
        }
        return currentTwo.data; //
      }
    }
  
//     kthFromEnd(k) {
//       if (k <= 0 || k > this.length) {
//         return null; // Invalid k value
//       }
  
//       let slow = this.head;
//       let fast = this.head;
  
//       // Move the fast pointer k nodes ahead
//       for (let i = 0; i < k; i++) {
//         fast = fast.next;
//       }
  
//       // Move both pointers until the fast pointer reaches the end
//       while (fast !== null) {
//         slow = slow.next;
//         fast = fast.next;
//       }
  
//       return slow.value;
//     }
//   }
  module.exports = LinkedList;