function removeIt(arr){
    let check = [];
    let unique = [];
    for(let i = 0; i < arr.length; i++){
        check.push(arr[i])
        console.log(check)
        for(let j = 0; j < arr.length; j++){
            if(check.indexOf(arr[j]) === -1){
                unique.push(arr[j]);
            }
        }
    }
    return unique
};

console.log(removeIt([2,5,4,5,2]))