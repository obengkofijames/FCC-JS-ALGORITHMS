function rot13(str) {
    str = str.toLowerCase()
    let result = "";
    let alpha = "abcdefghijklmnopqrstuvwxyz" //all alphabet

    // loop through string 
    for(let i = 0; i < str.length; i++){
  
      if(alpha.indexOf(str[i]) >= 13){ //===== thus if it's > 13 we'll minus 13 from  the index======
        result+=alpha[alpha.indexOf(str[i]) - 13]
      }else if(alpha.indexOf(str[i]) < 13 && alpha.indexOf(str[i])> -1){ //===== thus if it's < 13 or > -1 we'll add 13 to the index======
        result+=alpha[alpha.indexOf(str[i]) + 13]
      }else {
        result += str[i] // this is for space and other punctuations
      }
    }
  
    return result.toUpperCase();
  }
  
  console.log(rot13("SERR PBQR PNZC"));