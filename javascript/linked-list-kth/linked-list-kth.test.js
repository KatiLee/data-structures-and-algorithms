const { LinkedList, Node } = require('./index');
// const LinkedList = require('./index');
// Test case for kthFromEnd method

describe('LinkedList', () => {
  describe('kthFromEnd', () => {
    it('should return the value of the node that is k places from the tail', () => {
      // Create a linked list with known values
      const linkedList = new LinkedList();
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);
      const node4 = new Node(4);
      const node5 = new Node(5);
      linkedList.head = node1;
      node1.next = node2;
      node2.next = node3;
      node3.next = node4;
      node4.next = node5;
      linkedList.tail = node5;
      linkedList.length = 5;

      // Test different values of k
      expect(linkedList.kthFromEnd(1)).toBe(5);  // k = 1, the last node
      expect(linkedList.kthFromEnd(3)).toBe(3);  // k = 3, the node in the middle
      expect(linkedList.kthFromEnd(5)).toBe(1);  // k = 5, the first node
    });

    it('should return null for invalid values of k', () => {
      // Create a linked list with known values
      const linkedList = new LinkedList();
      const node1 = new Node(1);
      const node2 = new Node(2);
      linkedList.head = node1;
      node1.next = node2;
      linkedList.tail = node2;
      linkedList.length = 2;

      // Test invalid values of k
      expect(linkedList.kthFromEnd(0)).toBeNull();      // k = 0, invalid
      expect(linkedList.kthFromEnd(3)).toBeNull();      // k = 3, greater than the length
      expect(linkedList.kthFromEnd(-1)).toBeNull();     // k = -1, invalid
    });
  });
});
