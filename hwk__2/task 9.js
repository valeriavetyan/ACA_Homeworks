function PotentialCombinationsOfTwoDigits(){
  let num = '';
    for(let i = 0; i < 100; i++){
        if(i >= 0 && i < 10){
            num += '0' + [i] + ',';
        }
        else if(i >= 10 && i < 100){
            num += String(i) + ',';
        }
    }
    return num ; 
}
console.log(PotentialCombinationsOfTwoDigits());