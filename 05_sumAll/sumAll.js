const sumAll = function(x, y) {
    
    let biggerNum = y
    let smallerNum = x

    if (x > y) {
        biggerNum = x
        smallerNum = y
    }
    
    let sum = smallerNum
    for (let i = 2; i <= biggerNum; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
