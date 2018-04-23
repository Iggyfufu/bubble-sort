function swap(array, i, j) {
  let swapping = array[i]
  array[i] = array[j];
  array[j] = swapping;
  return array;
}

function bubbleSort(array) {
  if (array.length <= 1) return array;
  let sorted = false;
  while(!sorted) {
    let counter = 0
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        counter++
      }
    }
    if (counter === 0) {
      sorted = true;
    }
  }
  return array;
}
