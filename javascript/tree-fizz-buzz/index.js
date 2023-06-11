'use strict';

class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    fizzBuzzTree(root) {
      if (!root) {
        return null;
      }
  
      const newRoot = new Node(this.processValue(root.value));
      for (let child of root.children) {
        const newChild = this.fizzBuzzTree(child);
        newRoot.children.push(newChild);
      }
  
      return newRoot;
    }
  
    processValue(value) {
      if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
      } else if (value % 3 === 0) {
        return "Fizz";
      } else if (value % 5 === 0) {
        return "Buzz";
      } else {
        return String(value);
      }
    }
  }
  
  module.exports = { BinaryTree, Node };