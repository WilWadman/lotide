// Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🏅🏅🏅🏅 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥊🥊🥊🥊Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback){


  for (let key in object){
    if(callback(object[key]) === true){
return key;}

      
    }
    
  }
  
  


  const results1 = findKey (object1 = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  } , (x => x.stars === 2));

  const results2 = findKey(object2 = {
    "Canada" : { degrees: 0},
    "Us" : { degrees: 10},
    "Mexico" : {degrees: 30},
    "Bermuda" : {degrees: 40},
}, (x => x.degrees > 10));

const results3 = findKey(object3 = {
  "cyclops" : { eyes : 1},
  "human"   : { eyes : 2},
  "human with glasses" : { eyes : 4},
  "spider"  : { eyes : 8}
} , (x => x.eyes < 2));

  assertEqual(results1, "noma");
  assertEqual(results2,"Mexico")
  assertEqual(results3, "cyclops")

