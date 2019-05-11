// write a function that takes two positive inegers and see
//if they have the same frequency of digits

const sameFrequency = (num1, num2) => {
  let counter1 = {}
  let counter2 = {}
  let num1Array = num1.toString().split('')
  let num2Array = num2.toString().split('')

  if(num1Array.length !== num2Array.length) return false
  
  for(let num of num1Array){
    counter1[num] = ++counter1[num] || 1
  }

  for(let num of num2Array){
    counter2[num] = ++counter2[num] || 1
  }
  
  for(let key in counter1){
    if(!(key in counter2)){
      return false
    }

    if(counter1[key] !== counter2[key]){
      return false
    }
    
  }

  return true
}

console.log(sameFrequency(182,281))