const reuse = "row row row";

const regex = /([a-z]+)\s\1\s\1/g;

// console.log(reuse.match(regex));

// getting the letters before @ in an email address
const email = "obengkofijames@gmail.com";
const emailRegex = /^\w+/g
// console.log(email.match(emailRegex).join(""));

//using capture groups to validate a phone number
const phone = "024-123-4567";
const phoneRegex = /^(\d{3})-(\d{3})-(\d{4})$/g;

