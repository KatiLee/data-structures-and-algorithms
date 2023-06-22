'use strict';

const { mainModule } = require('process');

function sortYear(arr) {
  return arr.sort(compareYear);
}

function compareYear(movieA, movieB) {
  return movieB.year - movieA.year;
}

function sortTitle(arr) {
  return arr.sort(compareTitle);
}

function compareTitle(movieA, movieB) {
  const ignorePrefix = /^(A|An|The)\s/i;
  const titleA = movieA.title.replace(ignorePrefix, '');
  const titleB = movieB.title.replace(ignorePrefix, '');

  return titleA.localeCompare(titleB);
}

module.exports = { sortYear, compareYear, sortTitle, compareTitle };
