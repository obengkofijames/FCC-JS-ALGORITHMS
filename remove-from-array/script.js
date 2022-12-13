// remove from array

const remove = (arr,...rItem) => {
    return arr.filter(item => !rItem.includes(item));
}
// const remove = (arr,...rItem) => {
//     let newArr = [...arr];
//     rItem.forEach(item => {
//         newArr = newArr.filter(i => i !== item);
//     });
//     return newArr;
// }

console.log(remove([1,2,3,4,4], 2, 3));