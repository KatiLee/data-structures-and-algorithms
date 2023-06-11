const { BinaryTree, Node } = require('./index');

describe('FizzBuzz Tree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
  });

  it('should correctly transform the values of the tree', () => {
    const root = new Node(15);
    const node1 = new Node(3);
    const node2 = new Node(5);
    const node3 = new Node(7);
    const node4 = new Node(9);
    const node5 = new Node(10);

    root.children.push(node1, node2, node3);
    node1.children.push(node4);
    node2.children.push(node5);

    const newRoot = tree.fizzBuzzTree(root);

    expect(newRoot.value).toBe('FizzBuzz');
    expect(newRoot.children[0].value).toBe('Fizz');
    expect(newRoot.children[0].children[0].value).toBe('Fizz');
    expect(newRoot.children[1].value).toBe('Buzz');
    expect(newRoot.children[1].children[0].value).toBe('Buzz');
    expect(newRoot.children[2].value).toBe('7');
  });

  it('should return null for an empty tree', () => {
    const newRoot = tree.fizzBuzzTree(null);
    expect(newRoot).toBeNull();
  });
});
