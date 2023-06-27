'use strict';

function repeatedWord(str) {
    const sanitizedStr = str.toLowerCase().replace(/[^\w\s]/g, '');
    const words = sanitizedStr.split(' ');
    const wordOccurrences = new Map();
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      if (wordOccurrences.has(word)) {
        return word;
      } else {
        wordOccurrences.set(word, true);
      }
    }
  
    return null;
  }
  
  module.exports = repeatedWord