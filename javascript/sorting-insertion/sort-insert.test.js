'use strict'

const insertionSort = require('./sort-insert');

test('Insertion Sort - Sample Array', () => {
  const inputArray = [8, 4, 23, 42, 16, 15];
  const expectedSortedArray = [4, 8, 15, 16, 23, 42];

  const sortedArray = insertionSort(inputArray);

  expect(sortedArray).toEqual(expectedSortedArray);
});

