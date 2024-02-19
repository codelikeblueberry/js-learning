// Stack memory mein (PRIMITIVE DATA TYPES)
// Heap memory main (REFERENCE DATA TYPES)

let roll_number =  210113048
let another_roll_number = roll_number
another_roll_number = 210113049

console.log(roll_number);
console.log(another_roll_number);
// HERE WHEN YOU ASSIGN {another_roll_number = roll_number} the another_roll_number
//  get the copy of the roll_number

let accountid = {
    'name':'apple',
    'phone':911
}
let accountidtwo = accountid

accountidtwo = {
    'name' : 'pear',
    'email':'pear@fruits.com'
}
console.log(accountid);
console.log(accountidtwo);

// here we will get both different values.

let idOne = {
    'name':'apple',
    'phone':911
}
let idTwo = idOne
idTwo.name = "pear"

console.log(idOne); // OUTPUT : pear wali id
console.log(idTwo); // OUTPUT : pear wali id 
