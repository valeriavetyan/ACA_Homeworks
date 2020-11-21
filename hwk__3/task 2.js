function arrayFilter(arr) {
  let result = []; 
  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number') {
      result.push(arr[i]) ;
    }
  }
  return oddOrEven(result);  
}
function oddOrEven(arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
    result.push(arr[i]) ;
    } else {
      result.unshift(arr[i]) ;
    }
  }
  return result;
}
console.log(arrayFilter([null, null, 1, undefined, 5, 9, false]))