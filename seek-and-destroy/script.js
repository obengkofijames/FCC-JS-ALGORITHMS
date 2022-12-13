console.log("James seek and destroy, freecodeCamp")

const seekDestroy = (arr,...some) => {
    let args = [...some]
    return arr.filter(item => !args.includes(item))
}
console.log(seekDestroy([1, 2, 3, 1, 2, 3], 2, 3)) // [1, 1]