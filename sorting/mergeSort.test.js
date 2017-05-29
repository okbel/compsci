const init = [
  1,3,2,4,6,5
];

const final = [
  1,2,3,4,5,6
];

function mergeSort(nums) {

  // If the list has one element it means that
  // the list has been sorted out
  if (nums.length < 2) {
    return nums;
  }

  const length = nums.length;
  const middle = Math.floor(length / 2);

  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return compare(mergeSort(left), mergeSort(right));
}

function compare(left, right) {
  const results = [];

  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return results.concat(left, right);
}



test('merge sort', () => {
  expect(mergeSort(init)).toEqual(final);
})
