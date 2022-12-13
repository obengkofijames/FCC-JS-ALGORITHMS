// return the square of only integers
function squareIntegers(arr) {
  return arr.filter(x => Number.isInteger(x)).map(x => x * x);
}




let answer = (arr) => {
    return arr.filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num,2))
}

const sample = [1, 4, 4.5];

console.log(answer(sample));