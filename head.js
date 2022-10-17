// Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🏅🏅🏅🏅 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥊🥊🥊🥊Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 3);
assertEqual("Yes", "Yes");
// function that returns the head of the array
const head = function(array){
 return array[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");