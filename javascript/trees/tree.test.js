'use strict';

const { BinarySearchTree } = require('./index');

describe ('Binary search trees', () => {
    it('should instantiate an empty tree', () => {
        const tree = new BinarySearchTree();
        expect(tree.root).toBeNull();
    });

    it('should instantiate a tree with a single root node', () => {
        const tree = new BinarySearchTree();
        tree.add(3);
        expect(tree.root).not.toBeNull();
        expect(tree.root.value).toBe(3);
    });

    it('should add left and right child nodes properly', () => {
        const tree = new BinarySearchTree();
        tree.add(3);
        tree.add(6);
        tree.add(9);
        expect(tree.root).not.toBeNull();
        expect(tree.root.value).toBe(3);
        expect(tree.root.left).toBeNull();  // Adjusted expectation
        expect(tree.root.right).not.toBeNull();
        expect(tree.root.right.value).toBe(6);  // Adjusted expectation
        expect(tree.root.right.left).toBeNull();  // Adjusted expectation
        expect(tree.root.right.right).not.toBeNull();
        expect(tree.root.right.right.value).toBe(9);  // Adjusted expectation
      });
      

    it('should return a collection from a pre-order traversal', () => {
        const tree = new BinarySearchTree();
        tree.add(3);
        tree.add(6);
        tree.add(9);
        tree.add(12);
        tree.add(15);
        const result = tree.preOrder();
        expect(result).toEqual([3, 6, 9, 12, 15]);
    });

    it('should return a collection from an in order traversal', () => {
        const tree = new BinarySearchTree();
        tree.add(3);
        tree.add(6);
        tree.add(9);
        tree.add(12);
        tree.add(15);
        const result = tree.inOrder();
        expect(result).toEqual([3, 6, 9, 12, 15]);
    });

    it('should return a collection from the post order traversal', () => {
        const tree = new BinarySearchTree();
        tree.add(3);
        tree.add(6);
        tree.add(9);
        tree.add(12);
        tree.add(15);
        const result = tree.postOrder();
        expect(result).toEqual([15, 12, 9, 6, 3]);
      });
      

    it('should return true or false for the contains method', () => {
        const tree = new BinarySearchTree();
        tree.add(3);
        tree.add(6);
        expect(tree.containsValue(3)).toBe(true);
        expect(tree.containsValue(5)).toBe(false);
    });
});
