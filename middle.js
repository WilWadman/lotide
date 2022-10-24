
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = middle;