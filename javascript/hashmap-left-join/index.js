'use strict'

function leftJoin(map1, map2) {
  let result = [];

  for (let key in map1) {
    let row = [key, map1[key], null];

    if (map2[key]) {
      row[2] = map2[key];
    }

    result.push(row);
  }

  return result;
}

module.exports = leftJoin;
