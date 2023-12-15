// Task 
//Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

//Answer 

function needle(array){
    for (let i=0 ; i<array.length ; i++){
        if(array[i]=== 'needle'){
            return "found the needle at position "+ i ;
        }
    }
}
console.log(needle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

// Another Answer 

function needle(array){
    return "found the needle at position " + array.indexOf('needle');
}
console.log(needle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));