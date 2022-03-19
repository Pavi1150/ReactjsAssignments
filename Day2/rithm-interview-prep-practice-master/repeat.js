function repeat(str, num) {
    
    var strr = [];
  
    if(num < 1) {
      return "";
    }
  
    for(var i = 0; i < num; i++) {
      strr.push(str);
    }
  
    return strr.join('');
  }
  console.log(repeat('Matt', 3));
  console.log(repeat('Elie', 2));
  console.log(repeat('Michael', 0));