const arr1=[1,3,5,7,9];
//const keyword does NOT define a constant array. It defines a constant reference to an array

arr1[2]=6;
console.log(arr1[arr1.length]); //undefined
const arr2= new Array(3,6,9,12,15,18);

const arr4=new Array(5);  // arr4[0]=undefined as size parameter
// both are different arr4 and arr5
const arr5=[5];       // arr5[0]=5

console.log(arr1, arr2);
console.log(arr2.push([21,24,27,30]));//Appends new elements to the end of an original array, and returns the new length of the original array.
arr1.push("Mango");

console.log(arr1, arr2);

console.log(arr1.pop());
//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(arr1.join("separator")); // same as toString() but join() uses separator
console.log(arr1.shift(),  arr1)  //Shifting is equivalent to popping, but working on the first element instead of the last.
//The shift() method removes the first array element and "shifts" all other elements to a lower index.

let fruits = ["Banana", "Orange", "Lemon","Apple"];
console.log(fruits.unshift(5)); // unshift() is  equivalent to push(), buts works on the first element
console.log(fruits);

delete fruits[0]; //Array elements can be deleted using the JavaScript operator delete.
                 //Using delete leaves undefined holes in the array.
 
console.log(fruits[0]);
console.log(fruits) //[ <1 empty item>, 'Banana', 'Orange', 'Lemon', 'Apple']

const vegetables=["potato","onion","brinjles","ladiesfinger"];
const merge=vegetables.concat(fruits, arr1, arr2, "the end"); // return newArray with merge elements
console.log(merge); 


const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr.length)
const newArr = myArr.flat(); // Flattening an array is the process of reducing the dimensionality of an array.
//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
console.log(newArr + `length of new Array increases by flat() method is ${newArr.length}`);

// important The splice() method adds new elements to an original array, and returns an new array contains the deleted elements

const fan=["electric fan","Motor fan","magnetic fan"];
console.log(fan.splice(2,1,"Electric&magnetic Fan"));   
console.log(fan);

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

fruits1.splice(0, 1);  //you can use splice() to remove elements without leaving "holes" in the array:
console.log(fruits1);

const sliceArray=fruits1.slice(1,5); //The slice() method creates a new array.and does not remove any elements from the source array.
console.log("sliceArray",sliceArray); // excluding endindex argument

const fruits2 = ["Banana", "Orange", "Apple", "Mango",5,4,2,1,3,10];  //gives wrong result 1,10,2
console.log(fruits2.sort()); //sorts an array alphabetically: By default, the sort() function sorts values as strings.
//If apply sort() method in numbers array then gives wrong result i.e. why use compare function()
// This method mutates the array and returns a reference to the same array.
console.log(fruits2) ;   

fruits2.reverse(); //reverses the elements in an array.and returns a reference to the same array.
//sort an array in decreasing order by using both method sort() and reverse()
console.log(fruits2);
 
let number1 =[1,2,3,4,5,6];
console.log(number1.sort(function(a,b) {return (a-b)}));
number1.sort((a,b)=>b-a)
console.log(number1);

// find the highest number in an array
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }
console.log('myArrayMax',myArrayMax([789,-10,0]));

//find the lowest number in an array
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }
console.log('myArrayMin',myArrayMin([789,-10,0]));  


const arr3=[1,"Mango",{name:"Dheeraj",rollno:34},[2,4,6,8], Date.now(),new Date().toString()];
console.log(arr3);

console.log(typeof arr3, Array.isArray(arr3), arr3 instanceof Array)
//


// This function loops through an array comparing each value with the highest value found:

function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }

  //-------------------------------Sorting Object Arrays--------------------------

  const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  cars.sort(function(a, b){return a.year - b.year});
 console.log(cars);

 //  Comparing string properties is a little more complex:

 cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
console.log(cars);

  //                                                     traverse items of Array

const myArr1 = [1, 2, 3, 4, 5, 6];
console.log(myArr1.map(function squareNo(value,currentIndex,array){return value*value}))

const newArr1 = myArr1.flatMap((x) => x * 2);
//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
console.log(newArr1);

// filter()
const newArr2=myArr1.filter(myfunction)
//creates a new array contains even elements
console.log(newArr2)

function myfunction(value,index,array){
  return value%2==0;
}

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight().
//reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number
let sum=[1,2,3,4,5,6].reduce(function myfunction(previousValue,currentValue,currentIndex,array){return previousValue+currentValue},100)
console.log(sum)

// The every() method checks if all array values pass a test. return true and false

let checks=[1,2,3,4,5,6].every(function myfunction(currentValue,currentIndex,array){return currentValue<45})
console.log((checks));

// some() checks if some values pass a test. return true and false

console.log([1,2,3,4,5,6].some(function myfunction(currentValue,currentIndex,array){return currentValue<5}))

// array.indexOf(item, start)
console.log([1,2,6,4,5,6].indexOf(6,4))

console.log(["Apple", "Orange", "Apple", "Mango"].lastIndexOf("Apple"));

//find() method returns the value of the first array element that passes a test function.
console.log([1,2,6,4,5,6].find(function myFunction(value, index, array){return value>18;}))

//findIndex() method returns the index of the first array element that passes a test function.
console.log([1,2,6,4,5,6].findIndex(function myFunction(value, index, array){return value>18;}))

//The Array.from(iterable: Iterable<any> | ArrayLike<any>): any[]) and return Creates an array from an iterable object.

const array=Array.from([1,2,6,4,5,6])
const array1=Array.from("dheeraj")
console.log(array, array1);

//keys() Returns an iterable of keys(Array Iterator Object) in the array

const key1=["Apple", "Orange", "Apple", "Mango"].keys();
for(let x of key1){
  console.log(`key is ${x}`);
}

//entries() method returns an Array Iterator object with key/value pairs:
const arraykeyValuepairs=["Apple", "Orange", "Apple", "Mango"].entries()

for(let x of arraykeyValuepairs ){
console.log(x);
}

//array.includes(search-item,fromIndex?: number|undefined)
console.log(['apple','orange',NaN].includes(NaN)); //true

//The Spread ... operator expands an iterable (like an array) into more elements

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

heroes=["sharukh","slaman","ritik"]; // without keyword initialisation of Array
 
//------------------------An array declared with const has Block Scope.------------------------------------
const vehicle = ["Saab", "Volvo", "BMW"];
// Here vehicle[0] is "Saab"
{
  const vehicle= ["Toyota", "Volvo", "BMW"];
  // Here vehicle[0] is "Toyota"
}
// Here vehicle[0] is "Saab"

//-----------------------An array declared with var does not have block scope:-------------------------------
var cars5 = ["Saab", "Volvo", "BMW"];
// Here cars5[0] is "Saab"
{
  var cars5 = ["Toyota", "Volvo", "BMW"];
  // Here cars5[0] is "Toyota"
}
// Here cars5[0] is "Toyota"

// /--------------------------------------------------------------------------------------------------------------------
/*
const cars = ["Volvo", "BMW"];   // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
var cars = ["Volvo", "BMW"];     // Not allowed
cars = ["Volvo", "BMW"];         // Not allowed

{
  const cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  var cars = ["Volvo", "BMW"];   // Not allowed
  cars = ["Volvo", "BMW"];       // Not allowed
}
*/

// ----------------------------------------------------------------------------------------------------------------------
/*
var cars = ["Volvo", "BMW"];     // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
{
 var cars = ["Volvo", "BMW"];   // Allowed
 const cars = ["Volvo", "BMW"]; // Not allowed
}
*/

// --------------------------------------------------------------------------------------------------------------------
/*
const cars = ["Volvo", "BMW"];   // Allowed
{
  const cars = ["Volvo", "BMW"]; // Allowed
}
{
  const cars = ["Volvo", "BMW"]; // Allowed
}

*/
 
// ----------------------------------------------------------------------------------------------------------------

/*
 const joker=["happy","sad","angry"]   // Allowed
 const joker= new Array("happy","sad","angry");  // not allowed
 */
