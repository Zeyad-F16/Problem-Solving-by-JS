//Task

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
//Example [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// Steps

// Loop through the Array
// Check if the number has an integer Square root or not
// If true Take the root , if False Square the number
// Return the New Array

//Answer

function ToSquareRootOrNotToSquareRoot(array){
    let newArray = [];
    for(let i = 0 ; i < array.length ; i++){
        if(Number.isInteger(Math.sqrt(array[i]))){
            newArray.push(Math.sqrt(array[i]));
        }
        else {
            newArray.push(array[i] * array[i]);
        }
    }
  return newArray;
}
console.log(ToSquareRootOrNotToSquareRoot([4,3,9,7,2,1]));

//Another Answer

function ToSquareRootOrNotToSquareRoot(array){
    return array.map((number)=> 
    Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number)
}
console.log(ToSquareRootOrNotToSquareRoot([4,3,9,7,2,1]));