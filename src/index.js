module.exports = function reverse (n) {
    if (n < 0) {
        var number = n * -1;
        return (parseFloat(number.toString().split('').reverse().join('')));
    } else {
        return (parseFloat(n.toString().split('').reverse().join('')));
    }
}
