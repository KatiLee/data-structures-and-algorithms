'use strict';

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
  
      while (true) {
        if (value === current.value) {
          return;
        }
  
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    // Helper function for tree traversal
    _traverse(node, callback) {
      if (node) {
        this._traverse(node.left, callback);
        callback(node.value);
        this._traverse(node.right, callback);
      }
    }
  
    // Returns an array of values in the tree
    traverse() {
      const values = [];
      this._traverse(this.root, value => values.push(value));
      return values;
    }
  }
  
  function tree_intersection(tree1, tree2) {
    const hashmap = new Map();
    const commonValues = new Set();
  
    // Traverse the first tree and add values to the hashmap
    tree1.traverse().forEach(value => {
      hashmap.set(value, true);
    });
  
    // Traverse the second tree and check for common values
    tree2.traverse().forEach(value => {
      if (hashmap.has(value)) {
        commonValues.add(value);
      }
    });
  
    return commonValues;
  }

  const tree1 = new BinarySearchTree();
tree1.insert(5);
tree1.insert(2);
tree1.insert(8);
tree1.insert(1);
tree1.insert(4);
tree1.insert(7);
tree1.insert(9);

const tree2 = new BinarySearchTree();
tree2.insert(7);
tree2.insert(3);
tree2.insert(9);
tree2.insert(4);
tree2.insert(6);

const commonValues = tree_intersection(tree1, tree2);
console.log(commonValues); // Output: Set { 4, 7, 9 }

module.exports = {
    Node,
    BinarySearchTree,
    tree_intersection
  };