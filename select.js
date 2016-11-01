function select(array, func) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    if (func(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(select([0, -2, -0.4, 11, 3, 1], function(n) { return n > 0 }));
console.log(select([0, -2, -0.4, 11, 31, 1], function(n) { return n < 10 }));
