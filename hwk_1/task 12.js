let a = +prompt('Enter FIRST Number');
let b = +prompt('Enter SCEOND Number');
let c = +prompt('Enter THIRD Number');
if (a != 0 && b != 0 && c != 0  ) {

let D =  Math.pow(b, 2) - (4 * a * c) //diskriminant D = b^2 - 4ac
if ( D < 0){
  console.log('Solution does not exists')
}else if (D > 0){
   let x1 = (-b+Math.sqrt(Math.pow(b, 2) - (4 * a * c)))/2 *a
   let x2 = (-b-Math.sqrt(Math.pow(b, 2) - (4 * a * c)))/2*a
    console.log(x1)
    console.log(x2)
} else if ( D = 0){
   let x = -b /2*a
    console.log(x)
} 
}else{
    console.log('Enter valid constans') 
  } 