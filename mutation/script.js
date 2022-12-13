const mutation = arr => {
    let first = arr[0].toLowerCase();
    let end = arr[1].toLowerCase();
    
    for(let i = 0; i < end.length; i++){
        let letters = end[i].toLowerCase();
        if(first.indexOf(letters) === -1){
            return false
        }

        return true;
    }
}
console.log(mutation(["hello", "hey"]))

