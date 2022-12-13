const falsy = (arr) => {
    let result = []
    for(let i = 0; i < arr.length; i++){
        let individual = arr[i];
        if(individual){
            result.push(individual)
        }
    }
    return result;
};
console.log(falsy([7, "ate", "", false, 9 , NaN]))