/*

if (condition) {
   //  block of code to be executed if the condition is true
}

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
*/ 

//----------------------------------------------switch(expression)-------------------------------------------------------------

//Use the switch statement to select one of many code blocks to be executed.

/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

When JavaScript reaches a break keyword, it breaks out of the switch block.
If you omit the break statement, the next case will be executed even if the evaluation does not match the case

If default is not the last case in the switch block, remember to end the default case with a break.
*/

switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
console.log(text);


//-------------------------------------------------------Common Code Blocks----------------------------------------------

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text);

//-----------------------------------------------Strict Comparison-------------------------------------------

//Switch cases use strict comparison (===)

let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text)