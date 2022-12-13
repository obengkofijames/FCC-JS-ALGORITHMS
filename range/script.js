const someF = (arr) => {
    let low = Math.min(...arr)
    let high = Math.max(...arr)

    let rangeArr = [];

    const findR = (num1,num2) => {
        for(let i = num1; i <= num2; i++){
            rangeArr.push(i);
        }
    }
    console.log(findR(low,high))
    return rangeArr;
}

console.log(someF([1,5]))