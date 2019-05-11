// write a function called are there duplicates, accepts a variable
//number for arguments and checks for duplicates

const areThereDuplicates = (...args) => {
  const counter = {}

  for(let val of args){
    counter[val] = ++counter[val] || 1
  }

  for(let key in counter){
    if(counter[key] > 1) return true
  }

  return false
} 

console.log(areThereDuplicates(1,2,3))