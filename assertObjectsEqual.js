const eqObjects = function(object1, object2) {

  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {
    if (object1[key] !== object2[key]) {
      return false;
    }

  }

  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`🏅🏅🏅🏅 Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🥊🥊🥊🥊Assertion Failed: ${actual} !== ${expected}`);
}
console.log(`Example label: ${inspect(actual)}`);
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(eqObjects(ab, ba), true));

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(eqObjects(ab, abc), false)); // => false