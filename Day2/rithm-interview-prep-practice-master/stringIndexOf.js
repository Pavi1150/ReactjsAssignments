function stringIndexOf (word, char) {
    for (var i=0; i < word.length; i++) {
      if (word[i] == char) {
        i=i+1;
        return i;
      }
    }
    return -1;
  }
  console.log(stringIndexOf('pavi','a'))
  console.log(stringIndexOf('blue','u'))
