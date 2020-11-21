function findSumOfEachRow(arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    let sum = 0;
    for(let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j] ;
    } 
    result.push(sum) ;
  }
  return result;
}
console.log(findSumOfEachRow([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));