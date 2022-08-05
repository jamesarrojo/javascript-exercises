const repeatString = function(str, n) {
    let repeated = str
    
    for (let i = 0; i < n - 1; i++){
        repeated += str
    }

    return repeated
};

// Do not edit below this line
module.exports = repeatString;
