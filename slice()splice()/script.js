function copyInto(arr1,arr2,n){
    let arrr1 = arr1.slice();
    let arrr2 = arr2.slice();
    arrr1.splice(n,0,...arrr2)
    return arrr1;
};
console.log(copyInto([1,2,6,7,8],[3,4,5],2))


// copying arr2 into arr1 into the index provided 


function caps(str){
    let words = str.toLowerCase().split(" ");
    for(let i = 0; i < words.length; i++){
        let letters = words[i].split("")
        letters[0] = letters[0].toUpperCase();
        words[i] = letters.join("")
    }
    return words.join(" ")
};

console.log(caps("Lord, please I want to marry Whitney"))