// Convert number to reversed array of digits
// Given a random non-negative number, 
//you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// Change the number to String
// Split the String to an array
// Change the Strings in the array to Numbers
// Reverse the Array

//Answer 
function digit(n){
return n.toString()
.split("")
.map((m)=> Number(m))
.reverse()
}
console.log(digit(123456))