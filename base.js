const requestURL = "https://www.cbr-xml-daily.ru/latest.js";
let rates = {
    RUB: 1,
    AUD: 0.018513,
    AZN: 0.023134,
    GBP: 0.009899,
    AMD: 6.712085,
    BYN: 0.034306,
    BGN: 0.022529,
    BRL: 0.070404,
    HUF: 4.022073,
    HKD: 0.105894,
    DKK: 0.085658,
    USD: 0.013616,
    EUR: 0.011506,
    INR: 1.00275,
    KZT: 5.814089,
    CAD: 0.01729,
    KGS: 1.154341,
    CNY: 0.087989,
    MDL: 0.238691,
    NOK: 0.118836,
    PLN: 0.052018,
    RON: 0.056984,
    XDR: 0.009549,
    SGD: 0.018336,
    TJS: 0.154339,
    TRY: 0.114407,
    TMT: 0.047588,
    UZS: 145.628028,
    UAH: 0.364096,
    CZK: 0.292434,
    SEK: 0.117401,
    CHF: 0.012521,
    ZAR: 0.195325,
    KRW: 15.899945,
    JPY: 1.500161,
};

// function sendRequest(url) {
//     return fetch(url)
//         .then((response) => response.json())
//         .then((response) => {
//             rates = response.rates;
//         });
// }

// sendRequest(requestURL);

// console.log(rates);
