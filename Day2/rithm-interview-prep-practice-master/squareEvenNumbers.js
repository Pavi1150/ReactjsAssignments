let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squareEvenNumbers = (numStr) => {
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] % 2 === 0) {
    sum += Math.pow(numStr[i], 2);
    }
  }
  return sum
}
 
console.log(squareEvenNumbers(numStr));