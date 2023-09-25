/*
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/
const arr1=[1,2,3,4,5,6]
//--------------------------------------------------------------------------------------------------------------------
for(let i=0;i<arr1.length;i++){
    console.log("index: "+i+" value:"+arr1[i]);
}
//-------------------------------------------------------------------------------------------------------------------
console.log("Omit expression 1 of forLoop");
let i=0;
for(;i<arr1.length;i++){
    console.log("index: "+i+" value:"+arr1[i]);
}
//-------------------------------------------------------------------------------------------------------------

console.log(`You can initiate many values in expression 1 (separated by comma)`)
for(let i=0,len=arr1.length;i<arr1;i++){
    console.log("index: "+i+" value:"+arr1[i]);
}

//----------------------------------------------------------------------------------------------------------------------

/*If you omit expression 2, you must provide a break inside the loop. 
Otherwise the loop will never end. This will crash your browser.
*/

 console.log(`------------------Expression 3 omitted--------------------------`);
for (let i=0; i < arr1.length; ) {
    console.log("index: "+i+" value:"+arr1[i]);
  i++;
}

//-----------------------------------------------------------------------------------------------------------------------
//using var variable in a for loop
var j = 5;
for (var j = 0; j < 10; j++) {
  // some code
}
console.log(j)  //10

//----------------------------------------------------------------------------------------------------------------

//using let variable in a for loop
 let k=0;
 for(let k=0;k<10;k++){
    //some code
 }
console.log(k); //0 

//----------------------------------------------------------------------------------------------------------------------
console.log("--------------------looping through items of Iterable Object by for of loop------------------------------")
for(let items of arr1){
    console.log('value:'+ items);
}
console.log("----------------Looping through String-------------------------")
// Looping through String
for(let items of "Dheeraj"){
    console.log('value:'+ items);
}


//-----------------------------------------------------------------------------------------------------------------------------
let len=arr1.length
let start=0;
while(start<len){
console.log("index: "+start+" value:"+arr1[start]);
start++  
}

//-----p-----------------------------------------------------------------------------------------------------------

console.log("---------------do while loop-----------------------------")
//The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if 
//the condition is true, then it will repeat the loop as long as the condition is true.

/*Syntax
do {
  // code block to be executed
}
while (condition);
*/

let p = 0;
do {
  console.log(("the number is " + p))
  p++;
}
while (p < 5); 

//---------------------------------------------------------------------------------------------------------------------

console.log("--------------------loop through the key or properties of an Object:------------------");
//Syntax
/*for (key in object) {
    // code block to be executed
  }
*/

const person = {fname:"John", lname:"Doe", age:25};
for (let x in person) {
    console.log(`${x} is a key and `+"value:"+person[x]);
}
/*
The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]
*/

//-----------------------------------------------------------------------------------------------------------------

console.log(arr1.forEach(myfunction));
function myfunction(value,index,arr1){return value}
//-----------------------------------------------------------------------------------------------------------------


