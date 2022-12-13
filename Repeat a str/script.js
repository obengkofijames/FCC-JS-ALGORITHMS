function repaetStr(str,num){
    let result = "";
    for(let i = 1; i <=num ;i++){
        result += str
    }
    return result
}
console.log(repaetStr("james",3))

// using while loop

function whileRepeat(str,num){
    let result = "";
    while(num >= 1){
        result +=str;
        num--;
    }
    return result
}
console.log(whileRepeat("obeng",5))


// built-in function
function trySee(str){
    return str.repeat(3)
}
console.log(trySee("william"))