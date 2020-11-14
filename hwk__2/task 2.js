let num = prompt('Enter a Number');
function Reverse(num) {
    let newNum = '';
    for(let i = num.length - 1; i >= 0; i--){
            newNum += num[i];
        }
    return newNum;    
}
console.log(Reverse(num));