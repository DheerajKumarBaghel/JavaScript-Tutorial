
//comparison operator <,>,<=,>= its convert the null into 0 and equality == does not change null to 0

// ==== strict equality checks both datatype and value of two different objects

// Comparison of two different datatype
console.log(null>0)  //false
console.log(null>=0)  // true
console.log(null==0)  // false
console.log(null===0)  // false

// undefined doesnot change

console.log(undefined==0)   // all are false
console.log(undefined===0)
console.log(undefined>0)
console.log(undefined>=0)

// String change into number
console.log("2">1)    // true
console.log("2">=1)  //true
console.log("2"==2)   //  true
console.log("2"===2)  // false
console.log(""==false)  // true
console.log(""==0)    //  true
