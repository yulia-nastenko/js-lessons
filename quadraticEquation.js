function quadraticEquation(a, b, c) {
  var d = b * b - 4 * a * c;

  if (d > 0) {
    return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  if (d == 0) {
    return [-b / (2 * a)];
  }
  if (d < 0) {
    return [];
  }
}

console.log(quadraticEquation(2, 4, -7))
console.log(quadraticEquation(1, 6, 9))
console.log(quadraticEquation(2, 4, 7))
