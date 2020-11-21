function minAndMaxSum(arr) {
 let max = 0;
 let min = 100000000000000000;
 for(let i = 0; i < arr.length; i++) {
   if(arr[i].length > max) {
     max = arr[i].length
   } else if(arr[i].length < min) {
     min = arr[i].length
   }
 }
 return max + min;
}
console.log(minAndMaxSum(['anymore', 'raven', 'me', 'communicate']));