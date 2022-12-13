const steamrollArray = (arr) => {
let answer = [].concat(...arr)
   return arr.some(Array.isArray) ? steamrollArray(answer) : answer
}
//  console out final array 
console.log(steamrollArray([1, [2], [3, [[4]]]]));