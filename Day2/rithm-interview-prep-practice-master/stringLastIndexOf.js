function stringLastIndexOf(word, char) {
    let index = -1
    for (var i = 0; i < word.length; i++) {
      if (word[i] === char) {
        index = i
      }
    }
    return index
  }
  console.log(
    stringLastIndexOf('pavi', 'a'),
    stringLastIndexOf('blue', 'f')
  );