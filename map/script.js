// map is used to loop through array

const arr = [
    {name:"james",age:56,country :"Ghana"},
    {name:"Boot",age:4,country :"kasoa"},
    {name:"Frank",age:90,country :"Accra"}
]

const result = arr.map(user => user.name);
const another = arr.map(({name : Name , age : Age}) => ({Name, Age}));
// console.log(result)
// console.log(another)

const newArr = [["james",9,"In Love"],["Kwame","Sup"]];

let out = newArr.map(any => any[0])
// console.log(out)


// creating my own map function with a callback function
const s = [1,2,3,4,5,6,7,8,9,10];

Array.prototype.myMap = function(callback){
    let newArray = [];
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i]))
    }
    return newArray;
}

const newS = s.myMap(function(item){
    return item * 2;
})

console.log(newS);

