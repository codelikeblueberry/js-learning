var num1 = 2 //global
console.log("before execution",num1);
function changeVariable(){

    let num1 = 3
    function two(){
        console.log("num1intwo",num1)
    }
    two()

}

changeVariable()

console.log(num1);

// dont use the var keyword that's it!