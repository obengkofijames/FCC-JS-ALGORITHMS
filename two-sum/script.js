const sum = (arr,num) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            let summation = arr[i] + arr[j];
            if(summation === num){
                return i + "====" + j;
            }
        }
    }
    return false;
}

console.log(sum([1,2,3,5,6],9))