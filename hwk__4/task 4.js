function cleanPhoneNumber(number){
  for(let i = 0; i < number.length; i++){
    let num = '';
    if(number.length === 11 && number[0] === "+"){
      return number.slice(1,number.length)
    }else if(number[i] === " "){
      num = number.split(" ").join("") ;  // Methody Google-ic
      return num ; 
    }
    if(number.length > 11 || number.length < 11 || number[i] === "+"){
      return "Bad number";
      }
  }
return number; 
}
console.log(cleanPhoneNumber('455678'))