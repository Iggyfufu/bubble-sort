describe('Split Array function', function() {

  let array;

  beforeEach(function() {
    array = [9,1,7,6,3,2,13,21,12]
  })
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split(array)).toEqual([[9,1,7,6],[3,2,13,21,12]]);
  });
});

describe('Merge function', function(){
  let left;
  let right;
  beforeEach(function() {
    left = [1,2,7,9],
    right = [3,6,12,13,21]
  });

  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge(left,right)).toEqual([1,2,3,6,7,9,12,13,21]);

  });
});

describe('Merge Sort', function() {

  let array;

  beforeEach(function() {
    // spyOn(window, 'split').and.callThrough();
    // spyOn(window, 'merge').and.callThrough();
    array = [9,1,7,6,3,2,13,21,12];
  })
  it('mergeSort returns sorted array', function() {
    // your code here
    expect(mergeSort(array)).toEqual([1,2,3,6,7,9,12,13,21]);
    // expect(window.split.calls.count()).toEqual(9)
    // expect(window.merge.calls.count()).toEqual()
  });
});
