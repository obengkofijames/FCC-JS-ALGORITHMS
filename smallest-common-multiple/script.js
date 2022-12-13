function smallestCommons(arr) {
    // getting lower and higher number
   let lowerNum = Math.min(...arr);
   let higherNum = Math.max(...arr);
  //  console.log(lowerNum)
  
  // find range
  const findR = (num1,num2) => {
   let rangeArr = [];
    for(let i = num1; i <= num2; i++){
        rangeArr.push(i)
    }
    return rangeArr;
  }
  let range = findR(lowerNum,higherNum);
  //  find range ends here
  
  // find cm
  let multi = 1;
  
  while(multi < 1000000000){
    let hcm = (lowerNum*multi) * higherNum;
  // console.log(hcm, range)
  // truecount
  let trueCount = 0;
  for(let i = 0; i < range.length; i++){
    // console.log(range[i])
  
    if(hcm % range[i] === 0){
      trueCount++
      // console.log("trueCount===" +trueCount + " " + "rangeL===" + range.length )
  
      if(trueCount === range.length){
        return hcm
      }
    }
  }
  
  
    multi++;
  
  }
  // end of while loop
  
   
    return arr;
  }
  
  console.log(smallestCommons([1,5]));