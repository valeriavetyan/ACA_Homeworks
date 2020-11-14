function findDiffBetweenMaxMinDigits( num ){
  const strNum = '' + num;
  let min = 9;
  let max = 0;
  for ( let i = 0 ; i < strNum.length ; i++) {
    const currentDigit = +strNum[i];
    if (currentDigit > max) max = currentDigit;
    if (currentDigit < min) min = currentDigit;
  }
return max - min;
}

console.log(findDiffBetweenMaxMinDigits(4593653 ))