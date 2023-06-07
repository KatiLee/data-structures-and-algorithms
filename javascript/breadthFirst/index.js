'use strict';



class Tree {
    constructor(value, left, right) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  const breadthFirst = (tree, callback) => {
    if(tree === null) {
      return;
    }
    const queue = [tree];
  
    while (queue.length > 0) {
      const node = queue.shift();
      const value = node.value;
      callback(value);
  
      if (node.left !== null) {
        queue.push(node.right);
      }
    }
  };
  
  const t = new Tree(1,
      new Tree(2, null, null), new Tree (3,
            new Tree(4, null, null), null)
          );
  
  breadthFirst(t, console.log)