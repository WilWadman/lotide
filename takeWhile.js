const takeUntil = function(array, callback) {

  const output = [];
  for (let element of array){
    if(!callback(element)) output.push(element);
    else break;
  }
  return output;
  }


const data3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
const results3 = takeUntil(data3, x => x === 'j');
const data4 = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
const results4 = takeUntil (data4, x => x < 30);
const data5 = ['These', 'Words', 'will' , 'have' , 'lots' , 'of', 'letters'];
const results5 = takeUntil(data5, x => x.length < 4);



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);




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

assertArraysEqual(results3,['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'] ); // ==> true
assertArraysEqual(results4, [100, 90, 80, 70, 60, 50, 40, 30]); // ==> true
assertArraysEqual(results5, ['These', 'Words', 'will' , 'have' , 'lots']); // ==> true

