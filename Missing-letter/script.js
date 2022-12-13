const missingLetter = (letters) => {
    let alpha = "abcdefghijklmnopqrstuvwxyz" 
    //  start here   
   let start = alpha.indexOf(letters[0])

    //    loop through the letters parameter

    for(let i = start; i < start + letters.length; i++){
        if(alpha[i] !== letters[i]){
            return alpha[i]
        }
    }
};

console.log(missingLetter("abce"))