
function findTheDuplicate(arr) {
    let counter = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in counter) {
            counter[arr[i]]++
        } else {
            counter[arr[i]] = 1;
        }
    }
    for (let key in counter) {
        if (counter[key] > 1) return +key
    }
}
console.log(findTheDuplicate([1, 2, 3, 4, 3, 16]));
console.log(findTheDuplicate([8, 2, 9, 5, 1, 4, 9]))
