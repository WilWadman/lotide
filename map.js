/*Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.*/

const words = ["ground", "control", "to", "major", "tom"];
const animals = ["Fish", "goat", "chicken"];
const firstLetters1 = ["F", "g", "c"];
const firstLetters2 = ["F", "G", "c"];
const fish = ["Tuna", "salmon", "Cod"];
const fishrtLetters = ["T", "s", "C"];


const map = function(array, cb) {
  const results = [];
  for (let element of array) {
    results.push(cb(element));
  }
  return results;
};


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

const results1 = map(words, word => word[0]);
const results2 = map(animals, animal => animal[0]);
const results4 = map(fish, guppy => guppy[0]);
console.log(results1);



assertArraysEqual(results2, firstLetters1); // ==> true
assertArraysEqual(results2, firstLetters2); // ==> false
assertArraysEqual(results4, fishrtLetters); // ==> true


