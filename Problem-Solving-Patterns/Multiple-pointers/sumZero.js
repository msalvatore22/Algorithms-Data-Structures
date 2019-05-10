// Write a function called sumZero which accepts a sorted array
// returns the first pair where sum is zero
// return array of both values or undefined if no pair exists

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1

  while(left < right){
    let sum = arr[left] + arr[right]
    if(sum === 0){
      return [arr[left], arr[right]]
    } else if(sum > 0){
      right --
    } else {
      left ++
    }
  }
}

console.log(sumZero([-2, -1, 0, 1, 3]))