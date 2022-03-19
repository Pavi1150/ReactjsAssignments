
function countNumbers(c) {
    count = 0;
    for(i in c){
      if(c[i] == parseFloat(c[i])){
        count++;
      }
    }
    return count
}
console.log(countNumbers([]));
console.log(countNumbers(['a','b','2','hello','3'])); 
console.log(countNumbers(['3', '25', '6', 'hi', '10'])); 
 
