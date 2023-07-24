module.exports = function reverse (n) {
    let str = String(n).trim();
    if (str[0] === "-") str = str.slice(1);
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result = str[i] + result;
    }
    return +result
}
