//Primitive and Reference data type
//Primitive Datatypes//string,number,boolean,symbol
//Reference:objects(Arrays)
//Values:Null(object type),undefined,NaN(not a number)
//cntrl+space-autosuggestion

let note = 'kavya';
let a='welcome to js'
let b='    this is space    '
//returns the length of string
//output 5
console.log(note.length)
console.log(note.anchor)
//concatenates the string
//output kavyaRR
console.log(note.concat('RR'))
//return true or false
//output true
console.log(note.endsWith('a'))
//returns whether the string includes a particular value
//output true
console.log(a.includes('w'))
//returns the index of the string
//output 1
console.log(note.indexOf('a'))
//returns the last index of a particular value
//output 4
console.log(note.lastIndexOf('a'))
//REpeat the string specified times
//output kavyakavya
console.log(note.repeat(2))
//Replaces the given string
//output KAVYA R R
console.log(note.replace('kavya','KAVYA R R'))
//Seraches for the string and returns the index
//return -1 if not present
//output 11
console.log(a.search('js'))
//Return the string for the specified start & end index
//output vya
console.log(note.slice(2,5))
//Splits the string with comma
//welcome,to
console.log(a.split(" ",2))
//return true if the value matches else fals
//output true
console.log(note.startsWith('k'))
//returns the substring from the specified index
//output elc
//output s from reverse
console.log(a.substr(1,3))
console.log(a.substr(-1))
//return the string between the value
//output avy
console.log(note.substring(1,4))
console.log(note.substring(-1))
//converts to lowercase
//output kavya
console.log(note.toLowerCase('KAVYA'))
//converts to uppercase
//output KAVYA
console.log(note.toUpperCase())
//removes the unwanted spaces
//output this is space
console.log(b.trim())

/*----------------------------------------------------------------*/

//NUMBER-METHODS


var num = 5321.946;
//converts number to string
//output 532194
console.log(num.toString())
//converts to exponential type increases by 1 after decimal
//output 5.32e+3
console.log(num.toExponential(3))
//fixes the value as specified increments if value greater than 5
//output 5321.95
console.log(num.toFixed(2))

/*----------------------------------------------------------------*/

//GLOBAL METHODS

let text = 'hello';

//displays the error message in red color
//output hello
console.error(text)
//displays the information as text
//hello
console.info(text)
//creates a array of table in console
//
console.table(["Kavya","Rajendran","48"])
//Warning in yellow color
//output hello
console.warn(text)
//prints the normal string
//output hello
console.log(text)
//A popup displaays showing alert
//output This is an alert
//var ale_rt = alert("This is an alert");
//asks for information before displaying the page
//This is a prompt
//var pro_mpt = prompt("This is a prompt");
//For verfication or confirmation
//output Confirm
//confirm("Confirm");
//converts the object arguments(string) to number
//output 12
var  num_1 = "12";
var f_num = 123;

var new_num = console.log(Number(num_1))
//returns true or false based on the input
//output false
console.log(isNaN(num_1))
//returns the value after decimal point
//output 123.44
console.log(parseFloat("123.44 hello"))
//returns the value ignoring the decimal point
//output 40
console.log(parseInt("40.3 years"))
//returns string value for the Boolean value
//output true
console.log(String(Boolean(1)))
//returns the value as true or false based on condition
//output true
console.log(Boolean(10>9))



