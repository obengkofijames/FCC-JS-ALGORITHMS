// let arr = ["james","frank","bismark"];

// Array.prototype.myUcase = function(){
//     for(let i = 0; i < this.length; i++){
//         console.log(this[i])
//         this[i] = this[i].toUpperCase();
//     }
// };
// console.log(arr.myUcase());
// console.log("james".toUpperCase())


// Array.prototype.myUcase = function() {
//     for (let i = 0; i < this.length; i++) {
//         console.log(this[i]);
//       this[i] = this[i].toUpperCase();
//     }
//   };

//   var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.myUcase());



// my filter
let s = [4,8,2,9]
let newArr = [];
Array.prototype.myFilter = function(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i]) === true){
            newArr.push(this[i]);
        }
    }
    return newArr;
}

let result = s.myFilter(function(item){
    return item%2 ==0;
})
console.log(result);