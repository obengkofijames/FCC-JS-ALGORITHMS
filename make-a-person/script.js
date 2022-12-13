const Person = function(firstAndLast) {
  

  
  this.getFirstName = function() {
    return  firstAndLast.split(" ")[0];
  };
  
  this.getLastName = function() {
    return  firstAndLast.split(" ")[1];
  };

  this.getFullName = function() {
    return  firstAndLast;
  };

  this.setFirstName = function(first) {
    return  first + " " + this.getLastName();
  };

  this.setLastName = function(last) {
    return  this.getFirstName() + " " + last;
  };

  this.setLastName = function(fullN) {
    firstAndLast = fullN;
  };
  
  
};

const bob = new Person('Bob Ross');
// bob.setFirstName("Haskell")
// bob.setLastName("Curry")
console.log(bob.getLastName());
