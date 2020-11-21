function findTheQuantity(arr) {
  let quantityInt = 0 ;
  let quantityStr = 0 ;
  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number') {
      quantityInt++
    } else if(typeof arr[i] === 'string') {
      quantityStr++
    }
  }  
  return `Numbers: ${quantityInt}, Strings: ${quantityStr}`;
}
console.log(findTheQuantity([1, '10', 'hi', 2, 3]));