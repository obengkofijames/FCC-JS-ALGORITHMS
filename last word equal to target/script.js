function tryOut(word,target) {
    let wordss = word.slice(word.length - target.length);
    console.log(wordss)
    let kofi = wordss==target;
    return kofi
};

console.log(tryOut("james","es"));



const capitaliseFirst = str =>{
    let sentence = "";
    let sents = str.split(" ");
    for(let i = 0; i < sents.length; i++){
        let sent = sents[i]

        for(let j = 0; j < sent.length; j++){
            if(j === 0){
                sentence += sent[j].toUpperCase()
            }else{
                sentence += sent[j].toLowerCase()
            }
        }
        sentence +=" ";
    }
    return sentence.slice(0,sentence.length - 1)
}

console.log(capitaliseFirst("I'm a little tea pot"))
