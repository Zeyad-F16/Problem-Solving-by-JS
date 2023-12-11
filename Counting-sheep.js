//Task
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

//Answer 

function CountingSheep(arrayOfSheeps){
let conunter = 0 ;
arrayOfSheeps.map((m)=> {
    if(m == true) conunter++;
})
return conunter ;
}
