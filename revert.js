function revert(array) {
  var result = [];

  for (i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

console.log(revert([0]));
console.log(revert([1, 2, 3, 4]));
