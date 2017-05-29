const init = [
  1,3,2,4,6,5
];

const final = [
  1,2,3,4,5,6
];

function selectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {

    // Setting the minimun to this position
    let min = i;

    // Checks the rest of the array to see if
    // anything smaller
    for(let j = i + 1; j < nums.length; j++) {

      // Setting new min
      if (nums[j] < nums[min]) {
        min = j;
      }
    }

    // if the minimun isn't in position,
    // swap
    if(i != min) {
      const temp = nums[i];
      nums[i] = nums[min];
      nums[min] = temp;
    }

  }

  return nums;
}

test('selection sort', () => {
  expect(selectionSort(init)).toEqual(final);
})

// More about Selection Sort:
// https://www.youtube.com/watch?v=f8hXR_Hvybo
// https://www.nczonline.net/blog/2009/09/08/computer-science-in-javascript-selection-sort/
