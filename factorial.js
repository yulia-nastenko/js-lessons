function factorial(n) {
  var res = 1;

  if (n == 0) {
    return 1;
  }

  for (var i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

function factorialRec(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorialRec(n - 1);
  }
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(10));

console.log(factorialRec(0));
console.log(factorialRec(1));
console.log(factorialRec(2));
console.log(factorialRec(3));
console.log(factorialRec(10));
