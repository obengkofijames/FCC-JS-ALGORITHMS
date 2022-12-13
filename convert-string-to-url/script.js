
const convert = (title) =>{
    return title.split(' ').join('-').toLowerCase();
}


// or this way

function urlSlug(title) {

    return title.split(" ")
                .filter(word => word !=="")
                .map(word => word.toLowerCase())
                .reduce((total,current) => total+ "-"+current);
    }
    console.log(urlSlug(" Winter Is  Coming"));

console.log(convert('Hello World'));