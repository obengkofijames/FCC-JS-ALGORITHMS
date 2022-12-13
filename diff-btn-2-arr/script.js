
// difference between two arrays

const diffArr = (arr1,arr2) => {
    let comArr = [];

    function diffThem (first,second){

        // loop through first array
        for(let h = 0; h < first.length; h++){
            // checks if the element is in the second array
            // if not, push it to the comArr
            if(second.indexOf(first[h]) === -1){
                comArr.push(first[h]);
            }
        }
    }

    diffThem(arr1,arr2);
    diffThem(arr2,arr1);

    return comArr
}

console.log(diffArr([1,2,3,4,5],[1,2,3,4,5,6,7,8,9,10]))