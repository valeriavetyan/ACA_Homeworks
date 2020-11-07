let a = prompt('Enter a Number');
let b = '';
let c = a.slice(-1)
b = +c ? c + a.slice(0,-1) : a;
console.log(b);