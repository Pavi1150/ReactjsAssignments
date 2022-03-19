function removeFromString(str, start, rCount) {
    let newString = '';
  
    for (let i = 0; i < str.length; i++) {
  
      if (i < start || i >= start + rCount) {
  
        newString += str[i];
      }
    }
    return newString;
  }
  
  let res = removeFromString('Elie', 2, 2);
  console.log(res);