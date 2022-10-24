// Function implementation
const assertEqual = require('./assertEqual');

// we need to create a function that takes in 2 arrays as the input
// we also need a variable that can switch boolean values based on our conditions
//we can compare the 2 arrays with array.length, by matching their indexes, and by matching their types
// array.length will be a simple comparison using ===
  // if they dont match return false if they do match move to the next comparison code block
  // next we want to compare if both inputs are arrays
// we will need a for loop to run through the indexs' of each array to see if they match
  // if they dont match return false if they do match move to the next comparison code block
// we will need another for loop to run through and look at input types ie string vs number
// if they dont match return false if they do match at this point we can return true

const eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



module.exports = eqArrays;