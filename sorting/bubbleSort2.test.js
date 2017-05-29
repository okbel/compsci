const init = [
  1,5,2,4,6,3
];

const final = [
  1,2,3,4,5,6
];

function bubbleSort(nums) {
  let len = nums.length,
      i, j;

  for (i=0; i < len; i++) {
    swapped = false;
    for (j=0; j < len - 1; j++) {
      if (nums[j] > nums[j+1]) {
        const temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;
        swapped = true;
      }
    }
    // if (swapped === false) {
    //   console.log('unnessary')
    // }
  }

  return nums;
}

test('bubble sorting', () => {
  expect(bubbleSort(init)).toEqual(final);
});

// This code will run unnessary loops
