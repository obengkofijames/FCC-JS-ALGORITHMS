function findKeeper(srr,func){
    let num = 0;
    for(let i = 0; i < srr.length;i++){
        num = srr[i]
        if(func(num)){
            return num;
        }
    }
    return "none";
}

console.log(findKeeper([7,9,5,3,1], num => num% 2 === 0));