function Duck(name){
    this.name = name;
};
Duck.prototype = {
    constructor :Duck,
};
let duck = new Duck("James")


function Bird(name){
    this.name = name;
};
Bird.prototype = {
    constructor : Bird,
};


function Animal(){
}

Animal.prototype = {
    constructor : Animal,
    eat : function(){
        console.log("nom nom nom")
    }
};
duck = Object.create(Animal.prototype)

console.log(duck.eat())
