function indexOf(arr,index){
    for (let i=0; i < arr.length; i++) {
        if (arr[i] == index) {
      
          return i;
        }
      }
      return -1;
}
let result = [1, 2];

console.log(indexOf(result,1))
console.log(indexOf(result,2))
console.log(indexOf(result,3))
