const init = [
  1,3,2,4,6,5
];

const final = [
  1,2,3,4,5,6
];

function insertionSort(nums) {

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }

  return nums;
}

test('insertion sort', () => {
  expect(insertionSort(init)).toEqual(final);
});
