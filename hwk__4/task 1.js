function sequence(a, b){
    let numbers = [];  
    for(let i = a; i <= b; i++){
        let isAllDigitsAreEvenResult = isAllDigitsAreEven(i) ;
        if(isAllDigitsAreEvenResult){
            numbers.push(i) ; 
        }
    }
     if(numbers.length > 0){
        return numbers.join(",")
     } else {
        return 'Such numbers does not exist.';
        }
}

function isAllDigitsAreEven(n){
  let nStr = n +'';
  for(let j = 0 ; j < nStr.length ; j++){
    if(nStr[j] % 2 === 1 ){
      return false ;
    }
  }
  return true ;
}

console.log(sequence(19, 42))