let num = +prompt("Enter a Number");
let a = "" + num ;
let sum = 0 ;
let product = 1;
for (let i = 0; i < a.length; i++) { 
      sum += Number(a[i]) ;
      product *= a[i] ;

  if(product % sum === 0){
    const quotient = (product/sum);
    console.log (`Quotient is ${quotient}`)
  }else{
    const reminder = product%sum;
    console.log (`Reminder is ${reminder}`)
  }
}