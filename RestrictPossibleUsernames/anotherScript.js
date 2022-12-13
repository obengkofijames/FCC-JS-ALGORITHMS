// restricting possible users
const userName = "JamesKofiObeng";

// restricting possible users
const regex = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

// test the regex
const result = regex.test(userName);

// console.log(result);
console.log(result);