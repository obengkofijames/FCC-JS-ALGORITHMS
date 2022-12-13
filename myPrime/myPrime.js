const myPrime = (prime) => {
    let isPrime = true;
    if(prime == 1){
        isPrime = false
    }else if (prime > 1){
        for(let i = 2; i < prime; i++){
            if(prime % i == 0){
                isPrime = false;
            }
        }
    }

    return isPrime + " " + prime;
}


console.log(myPrime(2))