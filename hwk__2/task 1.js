let num1 = +prompt('Enter a FIRST Number');
let num2 = +prompt('Enter a SECOND Number');
 function FindDigitsContainsInTheNumber(num1,num2){
    for(let i = 0; i < num1.length; i++){
        if(Number(num1[i]) === Number(num2)){
            return 'yes';
        }   
    }
    return 'no';
}

console.log(FindDigitsContainsInTheNumber(num1,num2));