let x = 4;
let y = 19;
let z = -2;
if( x === 0 || y === 0 || z === 0){
  console.log('unsigned')
    }  else  if((x>0 && y>0 && z>0) || (x<0 && y<0 && z>0) || (x<0 && y>0 && z<0) || (x>0 && y<0 && z<0)){
    console.log("+")}
  else {
    console.log("-")
  }