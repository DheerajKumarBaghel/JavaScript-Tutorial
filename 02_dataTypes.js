"use strict"; // treat all JS code as newer version

//alert(3+3)  //we are using node.js not browser


/*javaScript has 8 datatype
1. String =>""
2. Number =>12 or 1.9
3. Bigint  => range 2 topowerof 53
4. Boolean  =>true or false
5. Undefined 
6. Null      => standlone value
7. Symbol    => unique No.
8. Object

i) object={name:"dheraj",rollno:80}
ii) date= new Date("2022-03-12")
iii) array=[1,2,66,5]
iv) function(){return "hello"}
*/

let name="dheeraj"
let value=null
console.log(`hello world ${name} and `+ typeof(name)) 
console.log(typeof null);      //null is object datatype asked in interview
console.log(typeof undefined)   //undefined
console.log(typeof value)

const symbol_1=Symbol("1230")    //return Symbol(1230) unique number
const symbol_2=Symbol("1230")     // gives unique number
console.log(symbol_1)
console.log(symbol_2)
console.log(symbol_1===symbol_2)      //false

let bigNumber=155522755n; //for made BigInt use 'n' in last

console.log(`value is ${bigNumber} and datatype is `+ typeof(bigNumber))

let myFunc= function(){
    console.log("hello function NonPrimitive datatype");
}

console.log(`value of myFunc is`+myFunc +`and datatype is`+ typeof myFunc)

let otherObject=
{
 name:"Dheeraj",
 fruits:["mango","apple","orange"],
 object_1:{
    vegetable:["onion","lemon","potato"],
    rollno:12,
     },
}
console.log(`otherObject value is ${otherObject} and datatype of object is `+typeof otherObject)
console.log(typeof otherObject.object_1.vegetable)
 
let date=new Date("2023-09-19");
console.log(date+'Datatype of Date is '+ typeof date);