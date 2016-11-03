function multiFactorial(n, k) {
  var res = 1;

  if (k <= 0) {
    return "Change k";
  }
  if (n <= 0) {
    return 1;
  }
  if (n < k) {
    return n;
  }

  for (var i = n; i > 0; i -= k) {
    res *= i;
  }
  return res;
}

function multiFactorialRec(n, k) {
  if (k <= 0) {
    return "Change k";
  }
  if (n <= 0) {
    return 1;
  }
  if (n < k) {
    return n;
  } else {
    return n * multiFactorialRec(n - k, k);
  }
}

console.log(multiFactorial(-1, 3));
console.log(multiFactorial(0, 3));
console.log(multiFactorial(8, 3));
console.log(multiFactorial(8, -3));
console.log(multiFactorial(8, 0));
console.log(multiFactorial(8, 1));

console.log(multiFactorialRec(-1, 3));
console.log(multiFactorialRec(0, 3));
console.log(multiFactorialRec(8, 3));
console.log(multiFactorialRec(8, -3));
console.log(multiFactorialRec(8, 0));
console.log(multiFactorialRec(8, 1));
