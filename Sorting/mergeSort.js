const mergeSort = array => {
  if (array.length === 1) return array

  console.log(`Printing Array Line 4: ${array}`)
  // find the middle index of the array to split array into 2
  const middleIdx = Math.floor(array.length / 2)
  console.log(`Printing Middle Index Line 7: ${middleIdx}`)
  // slice the array and pass each half back into function recursively to be sorted
  const firstHalf = mergeSort(array.slice(0, middleIdx))
  const secondHalf = mergeSort(array.slice(middleIdx))
  console.log(`Printing First Half Line 11: ${firstHalf}`)
  console.log(`Printing Second Half Line 12: ${secondHalf}`)
  // initialize array to store sorted values
  const sortedArray = []

  // initialize index variables
  let i = 0
  let j = 0

  // loop through each half to push lesser values
  while (i < firstHalf.length && j < secondHalf.length){
    console.log(`Printing Within While Loop: ${firstHalf[i]}, ${secondHalf[j]}`)
    if(firstHalf[i] < secondHalf[j]){
      sortedArray.push(firstHalf[i++])
    } else {
      sortedArray.push(secondHalf[j++])
    }
  }
  console.log(`Printing Sorted Array (after first while loop) Line 29: ${sortedArray}`)
  while(i < firstHalf.length) sortedArray.push(firstHalf[i++])
  console.log(`Printing Sorted Array (after second while loop) Line 31: ${sortedArray}`)
  while(j < secondHalf.length) sortedArray.push(secondHalf[j++])
  console.log(`Printing Sorted Array (after third while loop) Line 33: ${sortedArray}`)
  
  return sortedArray
}

console.log(mergeSort([3,1,6,7,4,10,9]))