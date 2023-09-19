let scores="25abc"
console.log(typeof scores);  // check from the fronted which datatype comes in scores field
//const {scores}=req.body

let valueinNo= Number(scores)
console.log(typeof valueinNo)
console.log(valueinNo)  // gives NaN (Not a Number)

scores=null
console.log(typeof scores)
 const valueinNumber=Number(scores)
 console.log("Value is ", typeof valueinNumber, " and it's", valueinNumber )

 scores=undefined   
 console.log(typeof scores)
 const valueinNumber1=Number(scores)
 console.log("Value is ", typeof valueinNumber1, " and it's", valueinNumber1)

 /*
 "dog123"=> NaN
 null =>0
 undefined => NaN
 true/false  =>1/0
 1/0  =>  true/false
 "emptyString"/""  => true/false
 null ==> false
 12   ==> "12"

  */ 

 let temp=null
 const booleantemp=Boolean(temp)
 console.log(typeof booleantemp ,"and","value is", booleantemp);


 let number=45
 const stringNumber=String(number)
 console.log(`Type of ${stringNumber} is`, typeof stringNumber );


 
