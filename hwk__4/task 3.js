function filterRange(arr,a,b){
  let result = [];
  for(let i = a; i <= b; i++){
    if(arr[i] > a && arr[i] < b){
     result.push(arr[i]); 
    }
  }
  return result ; 
}
console.log(filterRange([-10, -8, 0, 10, 20], -100, 15))