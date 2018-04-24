const split = (array) => {
  const middle = Math.floor(array.length/2);
  return [array.slice(0,middle), array.slice(middle)];
};

const merge = (left, right) => {
  const newArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      newArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      newArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [...newArr,...left.slice(leftIndex),...right.slice(rightIndex)];
};

const mergeSort = (array) => {
  if (array.length === 1 || array.length === 0) {
    return array;
  }
  let splitted = split(array);
  return merge(mergeSort(splitted[0]), mergeSort(splitted[1]));
};
