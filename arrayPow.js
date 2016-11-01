function arrayPow(array, power) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(Math.pow(array[i], power));
  }
  return result;
}

console.log(arrayPow([0, 5, 2, 7, 3], 2));
console.log(arrayPow([0, 5, 2, 7, 3], 3));
