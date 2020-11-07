let a = +prompt('enter a number');
let tarberutyun = (a, min = Infinity, max = -Infinity) => {
   if(a){
      let digit = a % 10;
      return tarberutyun(Math.floor(a / 10), Math.min(digit, min),
      Math.max(digit, max));
   };
   return max - min;
};
console.log(tarberutyun(a));