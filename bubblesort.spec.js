describe('Bubble Sort', function(){

  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough();
  });
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with one item', function(){
    expect( bubbleSort([3]) ).toEqual( [3] );
  });
  it('handles an array with multiple items', function(){
    expect( bubbleSort([9,3,6,1,2]) ).toEqual( [1,2,3,6,9] );
    expect(window.swap.calls.count()).toEqual(8);
  });
  it('handles an array with strings', function(){
    expect( bubbleSort([9,3,6,1,2]) ).toEqual( [1,2,3,6,9] );
    expect(window.swap.calls.count()).toEqual(8);
  });
});
