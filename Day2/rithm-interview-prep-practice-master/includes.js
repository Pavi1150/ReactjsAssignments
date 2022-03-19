function includes(num,index){
    for (let i = 0; i < num.length; i++) {
        if (num[i] ===index) {
          return true
        }   
      }
      return false 
  }
let result = includes([1,2,3],1,2);
let result2 = includes([1,2,3],6,5);

console.log(result)
console.log(result2)
