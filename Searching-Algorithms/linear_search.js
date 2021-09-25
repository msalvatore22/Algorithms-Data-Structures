// function linearSearch(arr, value){
//   let i = 0;
//   while(i < arr.length){
//     if(arr[i] === value){
//       return i
//     }
//     i++
//   }
//   return -1
// }

// console.log(linearSearch([1,2,3,4,5], 2))

function searchLinear(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val) return i
  }
  return -1
}

console.log(searchLinear([1,2,3,4,5], 3))