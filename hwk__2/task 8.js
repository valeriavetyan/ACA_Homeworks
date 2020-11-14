let n = +prompt('Enter a Number')
function sequence(n){
  let result = 0;
  let plyusOrMinus = '+';
  for( let i = 1; i <= n   ;i = i + 2 ) {
    if( plyusOrMinus === '+' ){
      result += 1 / i ;
      plyusOrMinus = '-';
    }else if (plyusOrMinus === '-'){
      result -= 1 / i ;
      plyusOrMinus = '+';
    }
  }
   return result ;
}
console.log(sequence(n))