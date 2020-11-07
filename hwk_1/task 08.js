let a = +prompt (" Write age number:");
let b = prompt ("Write month or year:");
if (b === "month")  {
    console.log ('baby');
     }
 else if (b ==="year" && (a >=1 && a<=2 )) {
      console.log('toddler');
} 
else if(b==="year" && (a >=3 && a<=12))  {
    console.log('child');
     } 
     else if (b==="year" && (a >=13 && a<=17 ))  {
      console.log('teenager'); 
    } else if (a >=18 && b==="year") {
          console.log('adult');
    }