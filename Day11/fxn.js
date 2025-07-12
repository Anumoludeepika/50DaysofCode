//function
let hello=function()
{
   return "hello world"
    
}
console.log(hello());
//even-odd
let deepika=(num)=>{
    return num%2==0?
    "even":"odd";
}
console.log(deepika(7))
//factorial
function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res*= i;
  }
  return res;
}
console.log(factorial(3)); 
//number divisible by 3 and 5
//number is divisible by both 3 and 5
const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
};
