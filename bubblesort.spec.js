describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with one item', function(){
    expect( bubbleSort([3]) ).toEqual( [3] );
  });
  it('handles an array with multiple items', function(){
    expect( bubbleSort([9,3,6,1,2]) ).toEqual( [1,2,3,6,9] );
  });
  it('handles an array with strings', function(){
    expect( bubbleSort([9,3,6,'one',2]) ).toEqual( [2,3,6,9,'one'] );
  });
});





