function minMaxKeyInObject(obj) {
    let keys = Object.keys(obj);
  
    return [Math.min(...keys), Math.max(...keys)];
  }
  
  console.log(
    minMaxKeyInObject({3: 'a',5: 'b',1: 'c',15: 'd',6: 'e'}),
    minMaxKeyInObject({2: 'Pavi',4: 'Subi',2: 'Priya'})
  );