// Function implementation
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays')


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`ππππ Assertion Passed: ${array1} === ${array2}`);

  } else {
    console.log(`π₯π₯π₯π₯Assertion Failed: ${array1} !== ${array2}`);



  }
};


module.exports = assertArraysEqual;