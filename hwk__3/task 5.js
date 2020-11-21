function findIndex(arr, num) {
 let tarberutyun = Infinity;
 let index ;
 for(i = 0; i < arr.length; i++) {
   if(arr[i] === num) {
     return i;
   } else if(arr[i] !== num) {
     if(Math.abs(arr[i] - num) < tarberutyun) {
       tarberutyun = Math.abs(arr[i] - num) ;
       index = i ;
     } 
   }
 }
 return index;
}
console.log(findIndex([5, 46, 17, -2, 89, 0, 26 ], 36));