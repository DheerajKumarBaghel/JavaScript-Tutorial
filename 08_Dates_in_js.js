//There are 9 ways to create a new date object:
//     1) create date objects

/*
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
*/

let date=new Date(); // Date Constructor   //gives current date time in ISO format in which T => time and Z => UCT or GMT
console.log(date); //Thu Jan 18 2022 14:35:47 GMT+06

console.log(new Date("2023-09-21"));  //The ISO format follows a strict standard in JavaScript.
console.log(new Date("October 13, 2014 11:13:00"));
console.log(new Date(2023,0,21));  

/*
JavaScript counts months from 0 to 11:
January = 0.
December = 11.
*/

console.log(new Date(2023,12,21,1,59,8,25))
//Specifying a monthIndex higher than 11, will not resul t in an error but add the overflow to the next year:

console.log(new Date(2018, 5, 35, 10, 33, 30))
//Specifying a day higher than max, will not result in an error but add the overflow to the next month:

console.log(new Date(99,8,20)); //1999
//One and two digit years will be interpreted as 19xx:

console.log(new Date(-100000000)) //January 01 1970 minus 100 000 000 000 milliseconds is:
//1695241180875 milliseconds past January 01, 1970

console.log(new Date(86400000)) // plus 24*60*60*1000ms to January 01 1970 

console.log(typeof new Date());

console.log(new Date().toString())

console.log(new Date().toDateString());

console.log(new Date().toISOString());

console.log(new Date().toUTCString());

console.log(new Date().toLocaleString('default',{
    dateStyle:"full",
    calendar:true,
}));

console.log(new Date().toLocaleDateString('default'),{
    Animation:true
})

console.log(new Date().toLocaleTimeString('default',{}));

//                                    Date Input Formats

/*
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"
*/

console.log(new Date("2023-09-21T03:15:20Z"))

const d1=Date.parse("March 21, 2012")  // return  number of milliseconds between the date and January 1, 1970:

console.log(d1);

console.log(new Date(d1).toDateString());

///                                              Date Get methods

let d2=new Date();
console.log(`Current time in ms ${Date.now()}`)  //Date.now() is a static method of the Date object return MilliSeconds from 1 Jan 1970 to current.

console.log(`current date is ${d2.toString()} and time in milliSeconds is ${d2.getTime()} and year is ${d2.getFullYear()} and month is ${d2.getMonth()+1} and day of date ${d2.getDate()} and weekday is ${d2.getDay()}
and hour is ${d2.getHours()} and minutes is ${d2.getMinutes()} and second is ${d2.getSeconds()} and current milliSeconds in (0-999) is ${d2.getMilliseconds()}`)


console.log(`current date is ${d2.toUTCString()} and year is ${d2.getUTCFullYear()} and month is ${d2.getMonth()+1} and day of date ${d2.getDate()} and weekday is ${d2.getDay()}
and hour is ${d2.getUTCHours()} and minutes is ${d2.getUTCMinutes()} and second is ${d2.getUTCSeconds()} and milliSeconds is ${d2.getUTCMilliseconds()}`)


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date("2021-03-25");
let day = days[d.getDay()];

console.log(d2.getTimezoneOffset())  // return in minutes as differnet b/w and local time and UCT min
  
//                                      set Methods apply on date
d2.setFullYear(2022,9,7)
d2.setHours(12)
d2.setMinutes(45)
d2.setSeconds(12)
d2.setMilliseconds(852)
console.log(`current date is ${d2.toString()} and time in milliSeconds is ${d2.getTime()} and year is ${d2.getFullYear()} and month is ${d2.getMonth()+1} and day of date ${d2.getDate()} and weekday is ${d2.getDay()}
and hour is ${d2.getHours()} and minutes is ${d2.getMinutes()} and second is ${d2.getSeconds()} and current milliSeconds in (0-999) is ${d2.getMilliseconds()}`)
