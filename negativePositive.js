// task
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]

function negativePositive(array){
    let newArray = [];
for (let i = 0 ; i < array.length ; i++ ){
 newArray.push(array[i]*-1)
}
return newArray ;
}
console.log(negativePositive([1, 2 , -5]));

// Another answer
function negativePositive(array){
  return array.map((x) => x * -1);
}
console.log(negativePositive([1, 2 , -5]));

