function shuffle(array) {
  var result = array.slice();
  var temp, newIndex;

  for (var i = 0; i < result.length; i++) {
    newIndex = Math.floor(Math.random() * result.length);
    temp = result[i];
    result[i] = result[newIndex];
    result[newIndex] = temp;
  }
  return result;
}

console.log(shuffle([10, 22, 30, 40, 50]));
