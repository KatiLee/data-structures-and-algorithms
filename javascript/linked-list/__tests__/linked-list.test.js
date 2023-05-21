'use strict';

// Require our linked list implementation
const LinkedList = require('./index');

describe('Linked List', () => {
  test('instantiate an empty linkedlist', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
  });

  test('insert', () => {
   const list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });
  test('proper pointer, first node', () => {
    const list = new LinkedList();
    list.insert(2);

    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull();

    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next).toBeNull();
    list.append('a');
    expect(lsit.head.next.next.value).toEqual('a');
  });

});
