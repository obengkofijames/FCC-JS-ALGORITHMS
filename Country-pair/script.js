const pairCountry = (country) => {
    let arr = country.split(' ');
    let countryObj = {
        Ghana : "GH",
        Nigeria : "NG",
        Kenya : "KE",
        Uganda : "UG",
    };

    return arr.map(item => [item, countryObj[item]] );

}

console.log(pairCountry("Ghana Nigeria Kenya Ghana"));