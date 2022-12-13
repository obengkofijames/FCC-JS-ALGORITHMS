const sumPrime = (num) => {
    
    
    // function check if prime
    function check (number){
        for(let i = 2; i < number; i++){
            if(number % i == 0){
                return false
            }
        }return true
    } 

    //  sum all
    let answer = 0
    for(let j = 2; j <= num; j++){
        if(check(j)){
            answer +=j;
        }
    }

    return answer
}
console.log(sumPrime(10))