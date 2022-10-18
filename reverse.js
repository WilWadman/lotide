// declaring our arg, slicing the first 2 pieces of the array off to be left with out inputs
const arg = process.argv.slice(2);



const reverse = function(commandString) {
  // declaring an empty string to store our output in
  let string = '';
// loop that runs the length of our sliced array 
  for (let i = 0; i < arg.length; i ++) {
   // declaration fo word variable to store our new data in 
    let word = commandString[i];
    // if i is greater than zero (starting space) then replace each space with a line break
    if (i > 0) {
      string += '\n';
    }
    // loop that runs backwards through our newly created string
    for (let j = word.length - 1; j >= 0; j --) {
      // declaring our new string again then adding each elemtn of the prvious string in reverse
  
      let reverseWord = word[j];
      string += reverseWord;
    }
  } return string;
};

console.log(reverse(arg)); 

