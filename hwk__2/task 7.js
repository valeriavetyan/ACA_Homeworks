let number = +prompt('Enter a Number');
let i = 0;
function FindFibonacciNumber(k){
  if(k <= 1) {
       return k;
    }else{
    return FindFibonacciNumber(k - 1) + FindFibonacciNumber(k - 2);
 }
}
  do{
    console.log(FindFibonacciNumber(i));
    i++;
  } while (FindFibonacciNumber(i) < number)