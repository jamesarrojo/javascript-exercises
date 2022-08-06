const repeatString = function(str, n) {
    let repeated = str
    
    if (n === 0) return ""

    if (n < 0) return "ERROR"

    for (let i = 0; i < n - 1; i++){
        repeated += str
    }

    return repeated
};

// Do not edit below this line
module.exports = repeatString;
