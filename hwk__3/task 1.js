function replaceWordsInSentence(sentence, arr){
  let index = 0 ;
  let newSentence = '' ;
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] === '_'){
      newSentence += arr[index]
      index++ ;
    }else {
      newSentence += sentence[i] ;
    }
  }
  
  return newSentence ;
}
console.log(replaceWordsInSentence("_, we have a _.", ['Houston', 'problem']))