const whatIsInAName = (collection, source) => {
  let arr = [];
    for(let i = 0; i < collection.length; i++) {
      let found = true;

      // loop through the source object
      for(let props in source){
        if(collection[i][props] !== source[props]){
          found = false;
        }
      }
      if(found){
        arr.push(collection[i]);
      }
    }
  
  return arr;
};

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, {first: "Tybalt", last: "Capulet"}],{ last: "Capulet" }));