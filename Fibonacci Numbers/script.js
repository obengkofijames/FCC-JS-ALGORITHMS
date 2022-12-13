const sumFab = (num) => {
    let fab = [1,1]
    let next = fab[fab.length - 2] + fab[fab.length - 1]

    while(next <= num){
        fab.push(next);
        next = fab[fab.length - 2] + fab[fab.length - 1];
    }

    return fab.filter(num => num % 2 !==0)
                .reduce((total,current) => total + current,0);
}

console.log(sumFab(90));