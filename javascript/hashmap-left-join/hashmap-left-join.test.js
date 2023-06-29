const leftJoin = require('./index');

describe('leftJoin', () => {
  test('should return the correct left join result', () => {
    const map1 = {
      diligent: 'employed',
      fond: 'enamored',
      guide: 'usher',
      outfit: 'garb',
      wrath: 'anger'
    };
    
    const map2 = {
      diligent: 'idle',
      fond: 'averse',
      guide: 'follow',
      flow: 'jam',
      wrath: 'delight'
    };
    
    const result = leftJoin(map1, map2);

    expect(result).toEqual([
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight']
    ]);
  });

  test('should handle empty maps', () => {
    const map1 = {};
    const map2 = {};
    const result = leftJoin(map1, map2);

    expect(result).toEqual([]);
  });

  test('should handle maps with missing keys in map2', () => {
    const map1 = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3'
    };
    const map2 = {
      key1: 'antonym1',
      key3: 'antonym3'
    };
    const result = leftJoin(map1, map2);

    expect(result).toEqual([
      ['key1', 'value1', 'antonym1'],
      ['key2', 'value2', null],
      ['key3', 'value3', 'antonym3']
    ]);
  });
});
