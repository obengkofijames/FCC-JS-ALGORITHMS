function titleCase(str){
    var words = str.toLowerCase().split(" ");
    for (let i = 0; i < words.length ; i++){
        let letters = words[i].split("")
        letters[0] = letters[0].toUpperCase()
        words[i] = letters.join("")
    }
    return words.join(" ")
};

console.log(titleCase("I'm a little tea pot"));
console.log("james".toUpperCase())
