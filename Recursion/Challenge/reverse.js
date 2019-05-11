// write a recursive function that reverses a string

function reverse(str){
  if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome'))