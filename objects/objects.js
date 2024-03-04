// OBJECT LITERALS 

const jsuser = {
    name : "swatantra"
}

jsuser.work = function(){
    return "Hi"
}
jsuser.fullname = `${this.name} yadav`   // this refers to the current execution context
jsuser.fullname = `${jsuser.name} yadav`



// ******************************


jsuser.emailmaker = function(){
    return `${jsuser["name"]}@gmail.com`             //POSSIBLE
}

jsuser.emailmaker = function(){
    return `${this["name"]}@gmail.com`             //POSSIBLE
}

jsuser.emailmaker = function(){
    return `${this.name}@gmail.com`                 //POSSIBLE
}

console.log(jsuser.emailmaker())
console.log(jsuser[emailmaker()]) // SYNTAX ERRROR YOU HAVE TO USE . TO ACCESS AND INVOKE THE FUNCTION