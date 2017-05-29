const init = [
  1,5,2,4,6,3
];

const final = [
  1,2,3,4,5,6
];

function quickSort(nums) {
  if (nums.length <= 1) return nums;

  const pivot = nums[nums.length-1];

  const left = [];
  const right = [];

  for (let i = 0; i < nums.length -1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return [].concat(quickSort(left), pivot, quickSort(right));
}

test('quick sorting', () => {
  expect(quickSort(init)).toEqual(final);
});
