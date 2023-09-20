let line1="Dheeraj is the best and this is a only boy who can trust on anyone";
let line2= new String("     Satya is a bad \n man      ");

/*
//Strings are immutable: Strings cannot be changed, only replaced.

String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
String search()
String match()
String matchAll()
String includes()

*/
console.log(line1.length)    //The length property returns the length of a string:

console.log(line1.slice(-8,-5))  // extracts a part of a string and returns the extracted part in a new string

console.log(line1.substring(-1,5))       // -ve index start with 0 by default

console.log(line1.replace("is","are"))  //replace(searchValue: string | RegExp, replaceValue: string): string
                                        //replace only first match and replace method is Case_Sensitive

console.log(line1.replace("z","\"l"))  //if searchValue is not found then return same string

 console.log(line1.replace(/IS/i, "are")) //To replace case insensitive, use a regular expression with an /i flag (insensitive):                           
                                          // Regular expressions are written without quotes.   

 console.log(line1.replace(/is/ig,"are"))  // To replace all matches, use a regular expression with a /g flag (global match)

 console.log(line1.substr(1,undefined))   // String.substr(from: number, length?: number | undefined): string

console.log(line1.indexOf("is", 4))     //Returns the position of the first occurrence of a substring. and 2nd param is The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.

console.log(line1.indexOf("z"))         // if Search_substring is not found then return -1

console.log(line1.replaceAll("is","are"))
//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown in the replaceAll()

console.log(line1.toLowerCase())

console.log(line1.toUpperCase())

console.log(line1.concat("mohan"))

console.log(line2.trim()); //Removes the leading and trailing white space and line terminator characters from a string.

console.log(line2.trimEnd());

console.log(line2.trimStart())

console.log(line1.charAt(4));
console.log("banana"[5]);

console.log(line1.charCodeAt(4)); 
//The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.

console.log(line1.split("is",1)); 
//split(separator: string | RegExp, limit?: number | undefined): string[]

console.log(line1.split(/is/));

console.log(line1.padStart(5,"2"));
//padStart(maxLength: number, fillString?: string | undefined): string

console.log(line1.padEnd(5,"1"));

console.log(line1.repeat(2));
//repeat(count: number): string
//number of copies to append
//Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.

console.log(line1.search("is"));
console.log(line1.search(/is/))
//return index of match i.e. "is"   
//String.search(regexp: string | RegExp): number (+1 overload)
//Finds the first substring match in a regular expression search(line1).
//@param regexp — The regular expression pattern and applicable flags.

console.log(line1.startsWith("dheeraj",5));

console.log(line1.endsWith("mohn"));

console.log(line1.match("is"))
// String.match(regexp: string | RegExp): RegExpMatchArray | null
//Matches a string with a regular expression, and returns an array containing the results of that search
//If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.
console.log(line1.match(/is/ig))  // case insensitive and global search

console.log(line1.matchAll(/is/g))
//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

console.log(line1.includes("is",5));
//@2ndparam position — If position is undefined, 0 is assumed, so as to search all of the String.
//includes() is case sensitive.

console.log(line1.valueOf());

console.log(line1.localeCompare(line2))
