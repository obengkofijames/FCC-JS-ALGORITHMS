let str = "my name is jaames obeng"

let regEx = /a*/ig
let result = str.match(regEx)
console.log(result)

console.log("a".repeat(100))

const magic = function () {
    return new Date()
}
console.log(magic())

const kofi = () => "kofi is a king"

let william = str.replace(/name/,"house-name")
console.log(william)
console.log(kofi())

const [a,,b] = [1,2,3,4,5,6,7]
console.log(a)
console.log(b)


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
   const [a,b,...king] = list
  return king;
}
const arr = removeFirstTwo(source);
console.log(arr)


// reverse string
const lookIntoReverse = flower => {

  let reverseFinal ="";
  for(let i = flower.length - 1; i >= 0; i--){
    reverseFinal += flower[i]
  }
  return reverseFinal;
}
console.log(lookIntoReverse("james"))


// javascript promise
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});




