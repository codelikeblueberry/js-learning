/*
In JavaScript, the forEach loop is a method available for arrays that allows
 you to iterate over each element in the array and execute a provided function
  for each element.
*/
array = new Array()
array.forEach(function(element, index, array) {
    // Code to be executed for each element
  });

/*
element: The current element being processed in the array.
index: (Optional) The index of the current element being processed.
array: (Optional) The array that forEach is being applied to.
*/

var fruits = ['apple', 'banana', 'orange'];

fruits.forEach(function(fruit, index) {
  console.log(index, fruit);
});

fruits.forEach( (item,index,array)=> {
    console.log(item,index,array)
} )


let  [key,value ]= [1,2]

console.log(key,value);
