//write a function called isSubSequence which takes 2 strings
//and checks whether the characters in the first string form a
//subsequence of the characters in the second string
//check whether the characters in the first string appear somewhere
//in the second string without their oder changing

const isSubSequence = (str1, str2) => {
  let i = 0;
  let j = 0;
  if(!str1) return false

  while(i < str2.length){
    if(str2[j] === str1[i]) i++

    if(i === str1.length) return true
    
    j++
  }

  return false
}

console.log(isSubSequence('hello', 'hello world'))

//recursive
function isSubsequenceR(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}