const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🏅🏅🏅🏅 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥊🥊🥊🥊Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  // delcaring an empty object
  const results = {};
 
  // for of loop to run through the letters of the string
  for (const letter of str) {
    // if the object has a key that is the value of letter
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
      
  }
  return results;
};
    
console.log(countLetters("lighthouse in the house"));
//assertEqual(countLetters("lighthouse in the house"),{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 })