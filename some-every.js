
//some method, identify contains odd
function hasOddNumber(arr) {
    return arr.some(function (val) {
        return val % 2 !== 0;
    })
}

//some method, identify if array contains zero
function hasAZero(num) {
    return num
        .toString()
        .split('')
        .some(function (val) {
            return val === '0';
        })
}

//every method, contains only odds
function hasOnlyOddNumbers(arr) {
    return arr.every(function (val) {
        return val % 2 !== 0;
    })
}

//every method, noDupes
function hasNoDuplicates(arr) {
    return arr.every(function (val) {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}


//every method, objects with specific key
function hasCertainKey(arr, key) {
    return arr.every(function (val) {
        return key in val
    })
}


//every method, 
function hasCertainValue(arr, key, searchValue) {
    return arr.every((val) => {
        return val[key] === searchValue;
    })
}
