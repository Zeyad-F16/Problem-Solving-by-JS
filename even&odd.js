//Task
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//Answer
function oddEven(num){
if(num % 2 == 0){
    return 'even';
}
else{
   return 'odd';
}
}

console.log(oddEven(4));