// write a function called avg pair
//given a sorted array of integers and a target avg
//determine if theres a pair in the array where the avg of the
//pair equals the target avg

const averagePair = (arr, n) => {
  let left = 0
  let right = arr.length - 1

  while(left < right){
    let avg = (arr[left] + arr[right]) / 2
    if(avg === n){
      return true
    } else if(avg < n){
      left++
    } else {
      right--
    }
  }

  return false
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))
