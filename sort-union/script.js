const union = (...arg) => {
    let first = arg
    let added = [];
    for(let i = 0; i < first.length; i++){
        let second = first[i]

        for(let j = 0; j < second.length; j++){

            // checks for duplicates 
            if(added.indexOf(second[j]) < 0){
                added.push(second[j])
            }
        }
    }
    return added
}

console.log(union([1, 3, 2], [5, 2, 1, 4], [2, 1]))