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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🏅🏅🏅🏅 Assertion Passed: ${array1} === ${array2}`);
    
  } else {
    console.log(`🥊🥊🥊🥊Assertion Failed: ${array1} !== ${array2}`);
  
  
   
  }
};

// first we need to setup a function that takes in2 arrays as input
// the first array is our data, the second array is what itmes we want to remove from the first array
// we should return a new array with only the elements that weren't removed by the data from the second array
// splice returns a new array
const without = function(arr3, itemRemover) {
  for (let i = 0; i < itemRemover.length; i++) {
    for (let h = 0; h < arr3.length; h++) {
  
      if (arr3[h] === itemRemover[i]) {
        arr3.splice(h, 1);
      }
    }
  }
  return arr3;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);