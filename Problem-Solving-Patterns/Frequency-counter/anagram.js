// Given two strings, write a function to determine if the second
// string is an anagram of the first
// letters must have same frequency in both words

// const validAnagram = (str1, str2) => {
//   if(str1.length !== str2.length) return false

//   const counter1 = {}
//   const counter2 = {}

//   for(let char of str1){
//     counter1[char] = ++counter1[char] || 1
//   }

//   for(let char of str2){
//     counter2[char] = ++counter2[char] || 1
//   }

//   for(let key in counter1){
//     if(!(key in counter2)){
//       return false
//     }
    
//     if(counter1[key] !== counter2[key]){
//       return false
//     }
//   }

//   return true
// }

// console.log(validAnagram('pizza', 'zipza'))

const validAnagram = (str1, str2) => {
  if(str1.length !== str2.length) return false

  const lookup = {}

  for(let i = 0; i < str1.length; i++){
    let char = str1[i]
    lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
  }

  for(let i = 0; i < str2.length; i++){
    let char = str2[i]
    if(!lookup[char]){
      return false
    } else {
      lookup[char] -= 1
    }
  }

  return true
}

console.log(validAnagram('pizza', 'zipza'))