function and(array1, array2) {
  var result = [];

  for (var i = 0; i < array1.length; i++) {

    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        result.push(array1[i]);
      }
    }
  }
  return result;
}

console.log(and([1, 2, 4, 5, 7, 8], [2, 0, 3, 9, 6, 7]));
console.log(and([1, 5], [4, 6, 7]));
console.log(and([1, 2], [2, 7]));
console.log(and([-7, 0], [-2, 0]));
