describe("Math Test", function() {
  it("Should return sum of 2 numbers", function() {
    expect(add(2, 3)).toEqual(5);
  });
  it("Should return subtract of 2 numbers", function() {
    expect(sub(2, 3)).toEqual(-1);
  });
  it("Should return multiplication of 2 numbers", function() {
    expect(mult(2, 3)).toEqual(6);
  });
  it("Should return 0 if 2 number3s are same", function() {
    expect(mult(2, 2)).toEqual(6);
  });
});
