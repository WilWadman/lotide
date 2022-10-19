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
const middle = function(arr){
  if (arr.length < 3){
    return [];
  } else {
    let value
    let midIndex = Math.floor(arr.length/2);
if(arr.length %2 !== 0){
  value = [arr[midIndex]]
} else {
   value = [arr[midIndex -1] , arr[midIndex ]]
   return value;
}
return value;
}
};
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(middle([1,2,3]),[2]); // = > true