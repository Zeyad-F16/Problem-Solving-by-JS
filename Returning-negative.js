//Task
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

//Answer
function ReturningNegative(number){
if(number == 0){
    return 0 ;
}
else if(number > 0){
    return -number ;
}
else if(number < 0){
    return number ;
}
}
console.log(ReturningNegative(5));