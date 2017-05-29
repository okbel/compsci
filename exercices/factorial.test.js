// Non recursive

// function factorial (x = 1) {
//   if (x < 1) {
//     console.log("Input number can\'t be bellow zero");
//   }
//
//   let result = 1;
//
//   for (let i = result; i <= x; i++) {
//     result = i * result
//   }
//
//   // Reverse loop
//   // for (let i = x; i > 0; i--) {
//   //   result = i * result
//   // }
//
//   return result;
// }

// Recursive Version

function factorial(x) {
  if (x < 2) return 1;
  return x * factorial(x-1);
}

test('factorial test', () => {
  expect(factorial(1)).toBe(1);
  expect(factorial(2)).toBe(2);
  expect(factorial(3)).toBe(6);
  expect(factorial(4)).toBe(24);
});
