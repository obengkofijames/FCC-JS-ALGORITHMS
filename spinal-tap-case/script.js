const spinal = (str) => {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    str = str.replace(/([A-Z])([A-Z])/g, '$1 $2');
    const regex = /\s+|_+/g;

    return str.replace(regex, '-').toLowerCase();
}


console.log(spinal("ThisIsAString"));