const truthCheck = (collection,pre)=>{
    let counter = 0;
    for(let i = 0; i < collection.length; i++){
        if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])){
            counter++
        }
    }
    return counter == collection.length;
}


console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"));