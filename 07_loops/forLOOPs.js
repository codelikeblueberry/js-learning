/*
In JavaScript, a for loop is a control flow statement that allows you
 to repeatedly execute a block of code as long as a specified condition 
 evaluates to true.
 */
let initialization=1
const condition=20
 for (initialization; condition>initialization; update++) {
    // code to be executed
  }

/*
initialization: Executed once before the loop starts. It often initializes a counter variable.
condition: Evaluated before each iteration. If it returns true, the loop continues; otherwise, it stops.
update: Executed after each iteration. Typically increments or updates the counter variable.

*/

for (var i = 0; i < 5; i++) {
    console.log(i);
  }

//   FOR IN  LOOP
// Used to iterate over the enumerable properties of an object. It is often used with objects, not arrays.
var person = { name: 'John', age: 30, job: 'developer' };

for (var key in person) {
  console.log(key + ': ' + person[key]);
}

// FOR OF LOOP
// Introduced in ECMAScript 2015 (ES6), the for...of loop is used to iterate over the values of iterable
//  objects (e.g., arrays, strings).

var fruits = ['apple', 'banana', 'orange'];

for (var fruit of fruits) {
  console.log(fruit);
}

let  [key,value ]= [1,2]

console.log(key,value);