const sentence = (sent) => {
    let regex =/\s\s/g;
    let result = sent.replace(regex, " ");
    return result.split(' ')
    .reverse()
    .join(' ');
}

console.log(sentence("The sky is  blue"));