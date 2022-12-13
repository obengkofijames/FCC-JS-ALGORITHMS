function addTogether() {
    let array = [...arguments];


    if(array.some(item => typeof(item) !== "number")){
        return undefined;
    }else if(array.length == 1){
        return function addNum (num2){
            return addTogether(array[0],num2);
        }
    }

    return array[0] + array[1];
}
  
  console.log(addTogether(23)([30]));// should return undefined.