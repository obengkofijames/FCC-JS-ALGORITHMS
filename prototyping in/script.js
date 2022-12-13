 let result = function(obj){
    obj.fly = function(){
        return "I'm flying"
    }
 }

 function Bird(){
    this.name = "James"
 }
 
  result(Bird)
  console.log(Bird.fly())






(
    function(){
        console.log("James")
    }
)();