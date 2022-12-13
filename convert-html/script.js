function convertHTML(str) {
    const obj = {
      "&" : "&amp;",
      "<" : "&lt;",
      ">" : "&gt;",
      '"' : "&quot;",
      "'" : "&apos;"
    }
    str = str;
    for(let i = 0; i < str.length; i++){
      let him = obj.hasOwnProperty([str[i]]);
      if(him){
        str = str.replace(str[i],obj[str[i]])
      }
    }
    return str;
  }
  
  console.log(convertHTML('Stuff in "quotation marks"'));