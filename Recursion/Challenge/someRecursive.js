//write a function that accepts an array and a callback
//the function returns true if a single value in the array
//returns true when passed to the callback
//otherwise returns false

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}

function isOdd(num){
  return num % 2 !== 0
}

console.log(someRecursive([1,2,3,4], isOdd))