const belong = (arr,num) => {
    let sortedArray = arr.sort(function(a,b){return a - b})
    for(let i = 0; i < sortedArray.length; i++){
        if(num > arr[i - 1] && num <= arr[i]){
            return i;
        }
    }

    if(sortedArray[sortedArray.length - 1] < num){
        return sortedArray.length
    }

    return 0
}

console.log(belong([40,60],50));

function getIndexToIns(arr, num) {
    let sortedArr = arr.sort()
    for(let i = 0; i < sortedArr.length; i++){
      if(num > sortedArr[i - 1] && num <= sortedArr[i]){
        return i;
      }
    }
    return 0;
  }
  
  console.log(getIndexToIns([40,60],50));