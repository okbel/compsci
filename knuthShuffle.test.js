function knuthShuffle(init) {
  const arr = init.slice();

  function swap(arr, i, j) {
    const temp =  arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function randomIdx(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  for (let i = 0; i < arr.length; i++) {
    swap(arr, i, randomIdx(i + 1, arr.length -1));
  }

  return arr;
}

test('knuthShuffle', () => {
  const arr = [
    1,2,3,4,5,6
  ];

  expect(knuthShuffle(arr)).not.toEqual(arr)
})
