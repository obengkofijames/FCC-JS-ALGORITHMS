 function myPrime(p){
    let isPrime = true;
    if(p == 1){
        isPrime = false;
    }else if(p > 1){

        // Loop from 2 
        for(var i = 2; i < p; i++){
            if(p % i == 0){
                isPrime = false;
                
            }
        }
    }

    // return isPrime;
    if(isPrime){
        console.log(p + " is a prime number");
    }else{
        console.log(p + " is not a prime number");
    }
}
 console.log(myPrime(6))
