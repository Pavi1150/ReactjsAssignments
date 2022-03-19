function lastIndexOf(array, number) {
    var index = array.length;
    while (index--) 
    if (array[index] === number) 
    return index;
    return -1;
}

console.log(lastIndexOf([1, 2, 3, 4], 3)); 
console.log(lastIndexOf([1, 2, 3, 4, 2], 2)); 
