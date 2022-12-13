function  findLongestWord(str) {
    let longestWord = "";
    let words = str.split(" ");
    for (let i =0;i<words.length;i++){
        let individualWord = words[i]
            if(individualWord.length > longestWord.length){
                longestWord = individualWord
            }
    }
    return longestWord.length

};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))


function take(str){
    let works = str.split(" ");
    let lWord = ""
    for(let i =0; i < works.length;i++){
        let ind = works[i];
        if(ind.length > lWord.length){
            lWord = ind
            console.log(lWord)
        }
    }
    return lWord.length
};
console.log(take("my name is james obeng"))