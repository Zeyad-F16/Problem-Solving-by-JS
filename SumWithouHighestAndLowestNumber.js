// Task
// Sum all the numbers of a given array ( cq. list ), 
// except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge,
// even if there are more than one with the same value
// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6


// Check if Empty Value return 0
// Find the heighest Number
// Find the Lowest Number
// Filter the Array
// Sum all numbers in the array

//array.sort((a,b)=> a-b) Arrange the array from smallest to largest
// slice (1 ,-1) remove the first(smallest) and the last(largest)

// Answer
function SumWithouHighestAndLowestNumber(array){
    if (array == null) return 0 ;
   return array.sort((a,b)=> a-b)
   .slice(1 , -1)
   .reduce((acc,current)=> acc + current , 0);
}
SumWithouHighestAndLowestNumber([1,2,3,4,5,8]);

// Another Answer 
function SumWithouHighestAndLowestNumber(array){
    if (array == null) return 0 ;
    let maxNum = Math.max(...array);
    let minNum = Math.min(...array);
    let filterArray = array.filter((x)=> x !== maxNum && x!== minNum).
    reduce((acc ,current)=> acc + current ,0);
    console.log(filterArray);
}
SumWithouHighestAndLowestNumber([1,2,3,4,5,8]);