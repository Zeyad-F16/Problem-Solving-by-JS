//Task
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.


// Answer
function sumOfPositive(arr){
let initValue = 0 ;
for(i=0 ; i < arr.length ; i++ ){
    if(arr[i] > 0 ){
    initValue += arr[i] ;
    }
} 
return initValue ;
}
console.log(sumOfPositive([1,2,3,-5,-4]));

// Another Answer
function sumOfPositive(arr){
return arr.filter((x)=> x > 0 )
.reduce((acc , current)=> acc + current ,0);
}
console.log(sumOfPositive([1,2,3,5,-4]));