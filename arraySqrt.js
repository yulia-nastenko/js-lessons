function arraySqrt(array) {
  var result = [];

  for (var i = 1; i < array.length; i++) {
    result.push(array[i] < 0 ? "< 0" : Math.sqrt(array[i]));
  }
  return result;
}

console.log(arraySqrt([4, 9, -9, 0, 16, 3, -8]));
