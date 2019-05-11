//write a function that accepts a base and an exponent and returns
//the power of the base to the exponent

function power(base, exponent){
  if(exponent === 0) return 1
  return base * power(base, exponent - 1)
}

console.log(power(2,2))