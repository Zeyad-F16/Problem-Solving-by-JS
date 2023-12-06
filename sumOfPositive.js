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