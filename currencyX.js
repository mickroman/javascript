var readline =  require ('readline-sync');




var conversionRates={
    AUD:1.04,
    GPD:.76,
    EUR:.86,
    JPY:112.94,
    CHF:.99,
    AFN:75.9,
    ALL:108.45,
    DZD:119.17,
    AOA:301.42
}

var userMoney= readline.question("how much money do you have? ");
console.log("you have " + userMoney + " in cash.");
var chooseCurrency = readline.question(" ");

Object.keys(conversionRates).forEach(function(key) {
    var value = conversionRates[key];
    var convertCurrency = value * userMoney;
    if (chooseCurrency ==  key) {
        console.log("USD to " + key +":" + convertCurrency);
    }
    return;
}
s
