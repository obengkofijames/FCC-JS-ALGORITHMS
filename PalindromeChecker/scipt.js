// freecodecamp Palindrome Checker
const PalindromeChecker = (str) => {
    const regex = /[^a-z0-9]/gi;
    const replaceW =str.replace(regex,"").toLowerCase();

    const reverseReplaceW = replaceW.split("").reverse().join("");

    if(replaceW === reverseReplaceW){
        return true;
    }
        return false;
}