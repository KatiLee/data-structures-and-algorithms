const mergeSort = require('./index');

test('Sorts an array of numbers in ascending order', () => {
  const input = [8, 4, 23, 42, 16, 15];
  mergeSort(input);
  expect(input).toEqual([4, 8, 15, 16, 23, 42]);
});

test('Does not modify the original array', () => {
    const input = [8, 4, 23, 42, 16, 15];
    const sortedArray = [...input]; 
    sortedArray.sort((a, b) => a - b); 
    mergeSort(input);
    expect(input).toEqual(sortedArray);
  });
  

test('Sorts an array with duplicate numbers', () => {
  const input = [8, 4, 23, 42, 16, 15, 4, 23];
  mergeSort(input);
  expect(input).toEqual([4, 4, 8, 15, 16, 23, 23, 42]);
});
