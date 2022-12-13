//sum all using if statement
const sumAll = (arr) =>{
    let sum = 0;
    if(arr[0] > arr[1]){
        for(let i = arr[1]; i <= arr[0]; i++){
            sum += i;
        }
    }else if(arr[0] < arr[1]){
            for(let i = arr[0]; i <= arr[1]; i++){
                sum += i;
            }
        }
        return sum;
}

console.log(sumAll([1, 4]));

// sum all in range
const add = (arr) =>{    
    let sum = 0;
    for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
    return sum;
}

console.log(add([1, 4]));