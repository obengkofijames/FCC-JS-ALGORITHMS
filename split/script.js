const email = "obengkofi4james@gmail.com";

const splitIt = (val) =>{
    // const split = val.split(/\d/);
    const split = val.split('@');
    return split[0];
}

const output = splitIt(email);
console.log(output);