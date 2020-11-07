 let a = +prompt('FIRST Exam');
 let b = +prompt('SECOND Exam');
 let c = +prompt('THIRD Exam');
 if( a >= 40 && b >= 40 && c >=40){
   console.log("Passed")
 } else if( (a + b + c)/3 >= 50 ){
     console.log('Passed');
 }else{
   console.log('Not Passed')
 }