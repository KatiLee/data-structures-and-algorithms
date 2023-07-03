const { Node, BinarySearchTree, tree_intersection } = require('./tree-intersection');

describe('tree_intersection', () => {
    // Create two sample binary trees
    const tree1 = new BinarySearchTree();
    tree1.insert(5);
    tree1.insert(2);
    tree1.insert(8);
    tree1.insert(1);
    tree1.insert(3);
    
    const tree2 = new BinarySearchTree();
    tree2.insert(2);
    tree2.insert(7);
    tree2.insert(1);
    tree2.insert(6);
    tree2.insert(9);
    
    it('should return the set of common values', () => {
      const result = tree_intersection(tree1, tree2);
      expect(result).toEqual(new Set([2, 1]));
    });
    
    it('should return an empty set if there are no common values', () => {
      const tree3 = new BinarySearchTree();
      tree3.insert(4);
      tree3.insert(6);
      tree3.insert(9);
      
      const result = tree_intersection(tree1, tree3);
      expect(result).toEqual(new Set());
    });
    
    it('should handle empty trees and return an empty set', () => {
      const tree4 = new BinarySearchTree();
      const tree5 = new BinarySearchTree();
      
      const result = tree_intersection(tree4, tree5);
      expect(result).toEqual(new Set());
    });
  });