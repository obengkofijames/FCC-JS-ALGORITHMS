function getLargestNumberInArray(arr){
    let result = []
    for(let i =0 ; i < arr.length; i++){
        let longestValue = -Infinity;
        for(let j = 0; j < arr[i].length; j++){
            let individualNumber = arr[i][j]
            if(individualNumber > longestValue){
                longestValue = individualNumber
            }
        }
        result.push(longestValue)
    }
    return result

}

console.log(getLargestNumberInArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// returns largest number in each array


