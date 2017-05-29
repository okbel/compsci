const init = [
  1,5,2,4,6,3
];

const final = [
  1,2,3,4,5,6
];

function bubbleSort(nums) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if(nums[i] > nums[i+1]) {
        let temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  // This ends running an extra loop to check that swapped goes
  // false during a whole loop at least once
  return nums;
}


test('bubble sorting', () => {
  expect(bubbleSort(init)).toEqual(final);
});
