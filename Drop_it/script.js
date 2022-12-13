const drop = (arr,func) => {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            return arr.slice(i)
        }
    }
    return result;
}


console.log(drop([1,2,3,4,5], function(n) { n > 5}));