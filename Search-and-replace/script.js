const wordTo = (str,before,after) => {
    const regex = /^[A-Z]/;
    if(regex.test(str)){
        after = after[0].toUpperCase() + after.substring(1);
    }else{
        after = after[0].toLowerCase() + after.substring(1);
    }
    return str.replace(before,after)
};

console.log(wordTo("Let us get back to more Coding", "Coding", "algorithms"))