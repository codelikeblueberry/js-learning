/*
In JavaScript, the behavior of the `this` keyword depends on how a function is called. Let's break down your examples:

1. Arrow function (`chai`):
   ```javascript
   const chai = () => {
       console.log(this); // doesn't have any execution context
   }
   ```
   Arrow functions do not have their own `this` context. Instead, they inherit 
   the `this` value from the surrounding scope (lexical scoping). In the case 
   of your arrow function `chai`, it will capture the `this` value from the 
   context in which it was defined. If it is defined in the global scope or 
   within another arrow function, it will use that context.

2. Regular function expression (`chai2`):
   ```javascript
   const chai2 = function() {
       console.log(this); // has execution context
   }
   ```
   Regular function expressions have their own `this` context, and it is 
   determined by how the function is called. If called as a method of an 
   object, `this` will refer to that object. If called without an object 
   context (e.g., `chai2()`), `this` will refer to the global object (`window` 
   in a browser environment, or `global` in Node.js).

3. Function declaration (`chai3`):
   ```javascript
   function chai3() {
       console.log(this); // has execution context
   }
   ```
   Function declarations, like function expressions, also have their own `this`
   context. The behavior is the same as with function expressions.

Remember that the behavior of `this` is a common source of confusion in JavaScript,
 and it's important to understand the rules based on how a function is invoked 
 (e.g., method invocation, function invocation, constructor invocation).


*/