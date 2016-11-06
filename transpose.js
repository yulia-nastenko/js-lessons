function transpose(array) {
  var res = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (!res[j]) {
        res.push([]);
      }
      res[j].push(array[i][j]);
    }
  }
  return res;
}

console.log(transpose([[1, 2], [3, 4], [5, 6]]));
