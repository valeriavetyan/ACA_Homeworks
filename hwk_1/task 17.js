let name = prompt('Enter a FIGUR name') ;
if ( name === 'triangle') {

let  base = prompt(' Enter a triangle BASE')  ;
let height = prompt('Enter a triangle HEIGHT');
if( base > 0 && height > 0){
let area = 0.5*(base*height);
console.log("Square of the triangle is : " + area);
  }else{
    console.log('Please enter only positives');
  }
} else if ( name === 'rectangle') {

let  rectangleLength =prompt("Enter length of rectangle:");
let  rectangleWidth = prompt("Enter width of rectangle:");

if (rectangleLength > 0 && rectangleWidth > 0 ) {

let  areaOfRectangle = rectangleLength * rectangleWidth ;
console.log("Square of the rectangle is : " + areaOfRectangle);
  }else {
    console.log('Please enter only positives');
  }
}
