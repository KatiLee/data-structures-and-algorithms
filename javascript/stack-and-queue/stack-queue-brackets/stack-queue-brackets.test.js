'use strict';

const { validateBrackets } = require('./index'); 

describe('validateBrackets', () => {
  it('should return true for balanced bracket strings', () => {
    expect(validateBrackets("{}")).toBe(true);
    expect(validateBrackets("{}(){}")).toBe(true);
    expect(validateBrackets("()[[Extra Characters]]")).toBe(true);
    expect(validateBrackets("(){}[[]]")).toBe(true);
    expect(validateBrackets("{}{Code}[Fellows](())")).toBe(true);
  });

  it('should return false for unbalanced bracket strings', () => {
    expect(validateBrackets("[({}]")).toBe(false);
    expect(validateBrackets("(](")).toBe(false);
    expect(validateBrackets("{(})")).toBe(false);
  });
});
