const LinkedList = require('../hashtables/LinkedList/index');
const HashTable = require('../hashtables/index');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('Should append values to the linked list', () => {
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.toString()).toBe('{ a } -> { b } -> { c } -> null');
  });

  test('Should insert a value before a specific value', () => {
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    list.insertBefore('c', 'x');
    expect(list.toString()).toBe('{ a } -> { b } -> { x } -> { c } -> { d } -> null');
  });

  test('Should throw an error when inserting before a non-existent value', () => {
    list.append('a');
    list.append('b');
    list.append('c');

    expect(() => {
      list.insertBefore('x', 'y');
    }).toThrow('Value not found');
  });
});

describe('HashTable', () => {
  let table;

  beforeEach(() => {
    table = new HashTable(500);
  });

  test('Should set and get a value in the hashtable', () => {
    table.set('name', 'John');
    expect(table.get('name')).toBe('John');
  });

  test('Should check if a key exists in the hashtable', () => {
    table.set('name', 'John');
    expect(table.has('name')).toBe(true);
    expect(table.has('age')).toBe(false);
  });

  test('Should return an array of keys in the hashtable', () => {
    table.set('name', 'John');
    table.set('age', 30);
    table.set('city', 'New York');

    const keys = table.keys();
    expect(keys).toEqual(['name', 'age', 'city']);
  });
});
