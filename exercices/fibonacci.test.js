function fibo(i) {
  if (i === 0) return 0;
  if (i === 1) return 1;

  return fibo(i-1) + fibo(i-2);
}

test('fibonacci', () => {
  expect(fibo(5)).toBe(5);
  expect(fibo(3)).toBe(2);
  expect(fibo(6)).toBe(8);
  expect(fibo(7)).toBe(13);
  expect(fibo(8)).toBe(21);
})
