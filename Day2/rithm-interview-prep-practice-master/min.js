function min(array) {
    var val = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < val) val = array[i];
    }

    return val;
}

console.log(min([2, 4, 6, 17, -1, 0]));