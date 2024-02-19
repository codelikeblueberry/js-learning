// string interpolation is like the print("my name is {name}")

const name = "yash"
const sir_name = "yadav"
const languages = 2
console.log(`Hello my name is ${name} ${sir_name} and i speak ${languages} languages!`);

// If you want to apply methods to the the string you should create string using the String() function.
/////////////////-7-6-5-4-3-2-1
const str = new String("   Youtube") // why the const is changing? Its not changing instead its returning new string.
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.search('t')); console.log(str.indexOf('t'));
console.log(str.charAt(2));
console.log(str.substring(0,4)); // the last index is excluded , not take negative values
console.log(str.slice(-3,-1)); // remember the string is printed from left to right so give first para>second
console.log(str.trim()); // removes the spacebars

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

