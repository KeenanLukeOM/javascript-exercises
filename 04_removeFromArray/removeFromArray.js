const removeFromArray = function(array, ...removedValue) {
    return array.filter(arrayElement => !removedValue.includes(arrayElement))
};

// Do not edit below this line
module.exports = removeFromArray;
