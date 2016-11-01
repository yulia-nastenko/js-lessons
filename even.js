function even(array) {
  var result = [];

  for (i = 0; i <= array.length-1; i++) {
    if (array[i] % 2 == 0) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(even([1, 3, 4, 5, 6, 8, 9]));
