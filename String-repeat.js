//Task
// Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// Answer
function StringRepeat(num , Str){
    let newString = '';
     for(let i = 0 ; i < num ; i++ ){
    newString += Str ;
    }
    return newString ;
}
console.log(StringRepeat(3,'Zeyad'));

// Another Answer 
function StringRepeat(num , Str){
    return Str.repeat(num);
}
console.log(StringRepeat(3,'Zeyad'));