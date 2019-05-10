// function that counts uniques in sorted array

// const countUniqueValues = (arr) => {
//   let i = 0;
//   let j = 1;
//   let lastIndex = arr.length - 1

//   while(j < lastIndex){
//     if(arr[i] === arr[j]){
//       j++
//     }
    
//     if(arr[i] !== arr[j]){
//       i++
//       arr[i] = arr[j]
//     }

//     if(j === lastIndex){
//       return i + 1
//     }
//   }

//   return 0;
// }

// console.log(countUniqueValues([1,1,2,3,3,4]))

function countUniqueValues(arr){
  if(arr.length === 0) return 0
  let i = 0;
  for(let j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

console.log(countUniqueValues([1,1,2,3,3,4]))