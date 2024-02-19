const id = Symbol('123')
const anotherId = Symbol('123')
let nl = null
let undef = undefined
let badanumber = 1000000000000000000000000000000000000000000n
console.log(id==anotherId);
console.log(typeof(nl));
console.log(typeof(undef));
console.log(typeof(badanumber));



const heroes = ['ironman','batman','spiderman','wonderwoman']

let biodata = {
    'name':'blueberry',
    'age':23,
    'languages known' : ['JS','Python','G0',]  ,
    'wife':null
}
let myfunction = function() {
    console.log("hello js");
}
console.log(typeof(myfunction));
