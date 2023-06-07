'use strict';

const { breadthFirst } = require('./index');

// Test cases
describe('Breadth-First Traversal', () => {
    it('should traverse a single node tree', () => {
      const t1 = new Tree(1, null, null);
      const result1 = [];
      breadthFirst(t1, (value) => result1.push(value));
      expect(result1).toEqual([1]);
    });
  
    it('should traverse a complete binary tree with three levels', () => {
      const t2 = new Tree(1,
        new Tree(2, new Tree(4, null, null), new Tree(5, null, null)),
        new Tree(3, new Tree(6, null, null), new Tree(7, null, null))
      );
      const result2 = [];
      breadthFirst(t2, (value) => result2.push(value));
      expect(result2).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
  
    it('should traverse a skewed tree', () => {
      const t3 = new Tree(1,
        null,
        new Tree(2,
          null,
          new Tree(3,
            null,
            new Tree(4, null, null)
          )
        )
      );
      const result3 = [];
      breadthFirst(t3, (value) => result3.push(value));
      expect(result3).toEqual([1, 2, 3, 4]);
    });
  });