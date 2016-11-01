function count(array, func) {
  var result = 0;

  for (var i = 0; i < array.length; i++) {
    if (func(array[i])) {
      result++;
    }
  }
  return result;
}

console.log(count([0, 2, 3, 4, 5, 6, 10], function(n) { return n % 2 == 0 }));
console.log(count([1, 2, 3, 4, 5, 6], function(n) { return n > 2 }));
