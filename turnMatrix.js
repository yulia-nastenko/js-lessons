function turnMatrix(array) {
  var res = [];

  for (var i = array.length - 1; i >= 0; i--) {
    for (var j = 0; j < array[i].length; j++) {
      if (!res[j]) {
        res.push([]);
      }
      res[j].push(array[i][j]);
    }
  }
  return res;
}

console.log(turnMatrix([[1, 2, 3], [3, 4, 3], [5, 6, 3]]));
