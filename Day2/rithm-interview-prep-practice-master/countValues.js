function countValues(c,num){
  count = 0;
  for(i in c){
    if(c[i] == num){
      count++;
    }
  }
  return count
}
console.log(countValues([1,1,2,2,2,3,3], 2)) 
console.log(countValues([4,1,4,5,6,7,4], 100)) 
 
