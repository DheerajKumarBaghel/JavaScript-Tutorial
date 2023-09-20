/*
stack memory(Primitive datatype)  and  heap(Non_Primitive datatype)

*/

let number1="01910102818"
let number2=number1

number1="3335277752"

console.log(number1)
console.log(number2)

//primitive data type is immutable, so we can't change the value of primitive variable

let objectone={

    email:"dheeraj@gmail.com",
    name:"dheeraj",
}

objecttwo=objectone

objecttwo.email="aditya1@gmail.com"
console.log(objectone.email);
console.log(objecttwo.email);