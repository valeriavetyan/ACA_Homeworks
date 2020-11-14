let str1 = prompt('FIRST player:Choose Paper, Rock or Scissors');
let str2 = prompt('SECOND player:Choose Paper, Rock or Scissors');
    function Game(str1,str2){
        if((str1 === 'Paper' && str2 === 'Paper') || (str1 === 'Rock' && str2 === 'Rock')||(str1 === 'Scissors' && str2 === 'Scissors')){
            return 'Draw! Enter new values.';
        }
        else if((str1 === 'Paper' && str2 === 'Rock') ||(str1 === 'Rock' && str2 === 'Scissors') || (str1 === 'Scissors' && str2 === 'Paper')){
            return '1st player wins!';
        }
        else if((str1 === 'Paper' && str2 === 'Scissors') || (str1 === 'Rock' && str2 === 'Paper') || (str1 === 'Scissors' && str2 === 'Rock')){
            return '2nd player wins!';
        }
        else{
            return 'Invalid input, enter correct value.'
        }
    }
console.log(Game(str1,str2));