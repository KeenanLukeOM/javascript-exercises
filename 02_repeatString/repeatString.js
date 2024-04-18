const repeatString = function(string, num) {
    let joinedString = string

    if (num === 0) {
        return ""
    } else if (num < 0) {
        return "ERROR"
    } else {
    for (i = 1; i < num; i++) {
        joinedString = joinedString + string
    }
    return joinedString }
}

// Do not edit below this line
module.exports = repeatString;
