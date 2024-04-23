const palindromes = function (string) {

    let alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789"

    let fix = string
                    .toLowerCase()
                    .split('')
                    .filter((char) => alphanumerical.includes(char))
                    .join('')

    let reverseFixed = fix
                        .split('')
                        .reverse()
                        .join('')
    

    if (fix === reverseFixed) {
        return true
    }
    return false
};
// Do not edit below this line
module.exports = palindromes;
