function numberIsPrime(num) {
  if (num <= 1) return 'no'; // bacasakan tveri hamar
  if (num % 2 == 0 && num > 2) return 'no'; // zuyg tveri hamar
  let newNUm = Math.sqrt(num); 
  for(let i = 3; i <= newNUm; i++) { 
      if(num % i === 0) return 'no'; // cuyc kta vor bajanarar gtnvec
  }
  return 'yes';
}

console.log(numberIsPrime(63))