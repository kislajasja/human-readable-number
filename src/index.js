const ones = ['','one','two','three','four','five','six','seven','eight','nine'];
const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

function toHundreds(number) {
    if (number > 99) {
        const tens = toTens(number % 100);
        const hundreds = ones[Math.floor(number / 100)] + " hundred";
        return tens ? `${hundreds} ${tens}` : hundreds;
    }
    return toTens(number);
}

function toTens(number) {
    if (number < 10) return ones[number];
    if (number >= 10 && number < 20) return teens[number - 10];
    const o = ones[number % 10];
    const t = tens[Math.floor(number / 10)];
    return o ? `${t} ${o}` : t;
}

module.exports = function toReadable (number) {
    if (number == 0) return "zero";
    else return toHundreds(number);
}
