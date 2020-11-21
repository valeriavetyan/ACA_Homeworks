function sentence (str){
 let arr = [];
  for (let i = 0; i < str.length; i++){
     if (str[i] === ' '){
      arr = str.split(' ') ; // .split methoty Googleic
    }
  }
    return arr ;
  } 
console.log(sentence('May the Force be with you.'))