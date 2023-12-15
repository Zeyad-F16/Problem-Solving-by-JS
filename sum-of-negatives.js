//Task
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//Answer 
 function countAndSum(array){
     let numOfPositive = [];
     let sumOfNegative = 0;
     for (let i = 0 ; i < array.length ; i++ ){
    if(array[i]> 0){
        numOfPositive.push(array[i]);
    }
    else{
        sumOfNegative += array[i];
    }
  }
  return [numOfPositive.length , sumOfNegative] ;
 }
 console.log(countAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

//Another Answer 
// initValue = 0 >> number of the index
// acc here = -11 
//current = -12
 function countAndSum(array){
 let numOfPositive = array.filter((x)=> x > 0 ).length;
 let sumOfNegative = array.filter((x)=> x < 0 )
 .reduce((acc,current)=> acc + current , 0);
  return [numOfPositive , sumOfNegative] ;
 }
 console.log(countAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));