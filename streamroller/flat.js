const steamrollArray = (arr) => {

     //  check function to check if array
     function check(item){
        return Array.isArray(item)
    }
    

    //  function to flat the nested array
    while(
        arr.some(check)
    ){
        arr = arr.flat()
    };


    // return final array
    return arr
}
//  console out final array 
console.log(steamrollArray([1, [2], [3, [[4]]]]));