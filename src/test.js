function fibonacci(n) {
  var res1 = 1;
  var res2 = 1;
  var sum = res2;
  for (var i = 1; i < n; i++) {
    sum = res1 + res2;
    res1 = res2;
    res2 = sum;
  }
  return sum;
}

console.log(fibonacci(10));
