const assertEqual = require('../assertEqual');
const head = function(array){
  return array[0];
 }
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 3);
assertEqual("Yes", "Yes");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");