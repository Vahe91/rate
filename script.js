const convert = document.querySelector("#convert"),
    converted = document.querySelector("#converted"),
    currencyLeft = document.querySelector("#left__currency"),
    currencyRight = document.querySelector("#right__currency");
let currencyL = "",
    currencyR = "",
    rateL,
    rateR;

for (let rate in rates) {
    if (rate === currencyLeft.value) {
        currencyL = currencyLeft.value;
        rateL = rates[rate];
    } else {
        for (let rate in rates) {
            currencyLeft.addEventListener("change", () => {
                if (rate === currencyLeft.value) {
                    currencyL = currencyLeft.value;
                    rateL = rates[rate];
                    converted.value = "";
                    convert.value = "";
                }
            });
        }
    }
}
for (let rate in rates) {
    if (rate === currencyRight.value) {
        currencyR = currencyRight.value;
        rateR = rates[rate];
    } else {
        for (let rate in rates) {
            currencyRight.addEventListener("change", () => {
                if (rate === currencyRight.value) {
                    currencyR = currencyRight.value;
                    rateR = rates[rate];
                    converted.value = "";
                    convert.value = "";
                }
            });
        }
    }
}

if (rateL > rateR) {
    convert.addEventListener("keyup", () => {
        converted.value =
            Math.round(convert.value * rateR * rateL * 1000) / 1000;
    });
    converted.addEventListener("keyup", () => {
        convert.value =
            Math.round(converted.value * rateR * rateL * 1000) / 1000;
    });
} else {
    convert.addEventListener("keyup", () => {
        converted.value =
            Math.round(((convert.value * rateR) / rateL) * 1000) / 1000;
    });
    converted.addEventListener("keyup", () => {
        convert.value =
            Math.round(((converted.value * rateL) / rateR) * 1000) / 1000;
    });
}
