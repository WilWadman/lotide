// Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`ππππ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`π₯π₯π₯π₯Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;