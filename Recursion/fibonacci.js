// write recursive fibonacci
//return the nth number in the sequence

function fib(n){
  if(n <= 2) return 1

  return fib(n-1) + fib(n-2)
}

console.log(fib(10))