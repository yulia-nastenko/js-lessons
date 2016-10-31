function fibonacci(n) {
  var beforeLast = 0;
  var last = 1;
  var temp;

  if (n == 0) {
    return 0;
  }

  for (var i = 2; i <= n; i++) {
    temp = last;
    last = beforeLast + temp;
    beforeLast = temp;
  }

  return last;
}

function fibonacciRec(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
  }
}

console.log(fibonacci(10));
console.log(fibonacci(3));
console.log(fibonacci(1));
console.log(fibonacci(0));

console.log(fibonacciRec(10));
console.log(fibonacciRec(3));
console.log(fibonacciRec(1));
console.log(fibonacciRec(0));
