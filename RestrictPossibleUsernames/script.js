const word = 'JackOfAllTrades';
const regex = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = regex.test(word);
console.log(result);