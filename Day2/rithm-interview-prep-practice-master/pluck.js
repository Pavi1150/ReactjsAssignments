
Arr = [
  { name: "Tim" }, { name: "Matt" }, { name: "Elie" }];
function pluck(input, field) {
  let output = [];
  for (let i=0; i < input.length ; ++i)
      output.push(input[i][field]);
 
      return output;
}

var result = pluck(Arr,"name"); // returns [ 1, 3, 5 ]
console.log(result)