const fibonacci = function(seq) {

    if (seq == 0) {
        return 0
    } else if (seq < 0) {
        return 'OOPS'
    }

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= seq; i++) {
        let current = firstPrev + secondPrev
        secondPrev = firstPrev
        firstPrev = current
    }

    return firstPrev
};

// Do not edit below this line
module.exports = fibonacci;
