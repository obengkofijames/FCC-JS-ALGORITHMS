
// javacript class with explicit constructor

class person {
    constructor(name,id){
        this.name = name
        this.id =  id
    }

    sayHello(){
        return `Hi, ${this.name} with ID ${this.id}. How are you doing?`
    }
}

const james = new person("Obeng",10810028)
// console.log(james)
// console.log(james.sayHello())

// implicit constructor
class user{
    sayHello(userName){
        return `Hi ${userName}, How are you doing?`
    }
}

const people = new user()
// console.log(people.sayHello("obengkofijames@gmail.com"))

// Use getters and setters to Control Access to an Object

class studentName{
    constructor(oldName){
        this.oldName = oldName
    }

    // getting the name of the student 
    get sName(){
        return `${this.oldName} ${this.newM}`
    }

    // updating the name of student
    set sName(newName){
        this.oldName = newName
        return `${this.oldName} ${this.newM}`
    }
}

const pepe = new studentName("kofi")

console.log(pepe.sName)
pepe.sName = "Frank"
console.log(pepe.sName)

