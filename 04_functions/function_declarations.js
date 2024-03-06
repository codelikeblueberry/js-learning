//  arrow function
const chai = () =>{
    let name = "swatatnra"
    console.log(this) // doesnt have any execution context
}
// regular function expression
const chai2 = function(){
    let name = "swatatnra"
    console.log(this) // have  execution context
}
// function declaration
function chai3(){
    let name = "swatatnra"
    console.log(this) // have  execution context
}
chai()
chai3()
chai2()

//  IF YOU WILL DO this.name in ALL OF THE ABOVE FUNCTION DECLARATIONS THEN
//  YOU WILL GET undefined.