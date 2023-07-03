'use strict';

const repeatedWord = require('./index');

describe('repeatedWord', () => {
    it('should return the first repeated word', () => {
      const str = 'I love love JavaScript';
      const result = repeatedWord(str);
      expect(result).toBe('love');
    });
  
    it('should return null if no repeated words are found', () => {
      const str = 'Hello world! This is a test.';
      const result = repeatedWord(str);
      expect(result).toBeNull();
    });
  
    it('should be case-insensitive', () => {
      const str = 'Hello hello World world';
      const result = repeatedWord(str);
      expect(result).toBe('hello');
    });
  });