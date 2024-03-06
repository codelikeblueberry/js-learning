
// Unnamed arrow function
const add = (a, b) => {
    return a + b;
};

// If the function body has only one expression, you can omit the curly braces and the return keyword
const multiply = (a, b) => (a * b);

// If the function takes a single parameter, you can omit the parentheses around the parameter
const square = x => (x * x);

// Arrow function with no parameters
const greet = () => {
    console.log("Hello!");
};