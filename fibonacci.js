function fibo(i) {
  console.log('CALLED')
  if (i === 0) return 0;
  if (i === 1) return 1;

  return fibo(i-1) + fibo(i-2);
}

console.log(
  fibo(5)
)


// 0 1 1 2 3 5 8 13 21
