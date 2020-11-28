const arr = ['Godfather', 'Whiplash', 'Social Network'];
function removeByLetter(arr, letter){
  for(let i = 0; i < arr.length; i++){
    if(letter === arr[i][0]){
     arr.splice(1 , i) ;  
    }
  }
  return arr ;
}
console.log(removeByLetter(arr, 'v'))