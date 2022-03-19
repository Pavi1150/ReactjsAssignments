function separate(arr){
    return []
            .concat(arr.filter(s => s === "pavi"))
            .concat(arr.filter(s => s === "doodle"))
            .concat(arr.filter(s => s === "blue"))
  }
let result=separate(['pavi','doodle','blue']);
console.log(result)