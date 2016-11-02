function doubleFactorial(n) {
  var res = 1;

  if (n < 0) {
    return "<0";
  }
  if (n < 2) {
    return 1;
  }

  for (var i = n; i > 0; i -= 2) {
    res *= i;
  }
  return res;
}

function doubleFactorialRec(n) {
  if (n < 0) {
    return "<0";
  }
  if (n < 2) {
    return 1;
  } else {
    return n * doubleFactorialRec(n - 2);
  }
}

console.log(doubleFactorial(-1));
console.log(doubleFactorial(0));
console.log(doubleFactorial(1));
console.log(doubleFactorial(2));
console.log(doubleFactorial(3));
console.log(doubleFactorial(4));
console.log(doubleFactorial(9));
console.log(doubleFactorial(10));

console.log(doubleFactorialRec(-1));
console.log(doubleFactorialRec(0));
console.log(doubleFactorialRec(1));
console.log(doubleFactorialRec(2));
console.log(doubleFactorialRec(3));
console.log(doubleFactorialRec(4));
console.log(doubleFactorialRec(9));
console.log(doubleFactorialRec(10));
