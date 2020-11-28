function lengthen(word1 , word2){
let result = [];
  if (word1.length !== word2.length && word1.length>0 && word2.length >0 ) {
    if (word1.length > word2.length) {
       while(result.length < word1.length){
         result.push(word2);
    }
         return result.join('');
    }
    if (word1.length < word2.length) {
         while(result.length < word2.length){
          result.push(word1);
     }
          return result.join('');
     }  
  }  
}
console.log (lengthen("ingenius", "forest"))