mufunc = function(){
    var i = 10
}
// console.log(i); why giving error even if it is the global variable?
// Because the i is function scoped variable while let is block scope varibale


function exampleVar() {
    if (true) {
        var x = "hehehehe";
        console.log(x); // Outputs 10
    }
    console.log(x); // Outputs 10 (var is function-scoped)
}

function exampleVar() {
    if (true) {
        let x = "huhuuh";
        console.log(x); // Outputs 10
    }
    console.log(x); // Outputs 10 (var is function-scoped)
}

exampleVar()