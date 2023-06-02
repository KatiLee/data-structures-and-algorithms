'use strict';

function validateBrackets(string) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    
    for (let i = 0; i < string.length; i++) {
      const bracket = string[i];
  
      if (openingBrackets.includes(bracket)) {
        stack.push(bracket);
      } else if (closingBrackets.includes(bracket)) {
        const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(bracket)];
        if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
          return false;
        }
      }
    }
    return stack.length === 0; 
  }

  module.exports = {
    validateBrackets,
  }; 