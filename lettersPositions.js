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




const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    // if the object has a key that is the value of letter
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
      
    }
  }
  return results;
};
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);