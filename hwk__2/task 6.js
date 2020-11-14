let num = +(prompt('Enter a Number'));
 function FindFibonacciNumber(k){
    if(k <= 1) {
       return k;
    }else{
    return FindFibonacciNumber(k - 1) + FindFibonacciNumber(k - 2);
 }
}
console.log(FindFibonacciNumber(num));