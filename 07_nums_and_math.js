
/*
const number1=100000;

let number2=new Number(100);

console.log(number1);

console.log(number2);

console.log(number2.parseInt())

console.log(number2.toString());
console.log((123).toString());

console.log(number2.toString().length);

console.log(number1.toFixed(2));
console.log(number1.toFixed(3));

console.log(100.8679.toPrecision(5))
//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

console.log(1001.8679.toPrecision(4))
console.log(100.8679.toPrecision(2))

console.log(1000.25.toLocaleString(4))
console.log(number1.toLocaleString("en-IN"));

let x = 100 / "Apple";  //gives NaN
console.log(isNaN(x));

//If you use NaN in a mathematical operation, the result will also be NaN:

let x = NaN;
let y = 5;
console.log(x + y);

//typeof NaN returns number

let x =  2 / 0; 
console.log(x)  // Infinity  //typeof Infinity returns number.



*/
// ==========================================Math--------------------------------------------------------------------------
// Math is static object and access property and method() by Math object
let y = 123e-5;   // 0.00123
console.log(Math)
console.log(Math.round(5.36))
console.log(Math.ceil(5.11))
console.log(Math.floor(5.99))
console.log(Math.trunc(-25.3698))  //Returns the integer part of x 
console.log(Math.abs(-5.99))
console.log(Math.max(4,5,10))
console.log(Math.min(4,2,1))
console.log(Math.random()) 
//Returns a pseudorandom number between 0 and 1(exclusive)

console.log(Math.floor((Math.random()*10)+1))  // gives no. b/w 1 and 10

const max=20;
const min =15;
// i want a no. lie b/w  15 AND 20
console.log(Math.floor(Math.random()*(max-min)+min ))
console.log(Math.sign(0));
console.log(Math.PI);
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)