describe("Test isNaN and isNull", function() {
  it("Check is Infinity", function() {
    var a = 10;
    var b = 0;
    expect(a / b).toBePositiveInfinity();
  });
  it("Check is NaN", function() {
    var a = "ABC";
    var b = 20;
    expect(a - b).toBeNaN();
  });
  it("Check is null", function() {
    var a = null;
    expect(a).toBeNull();
  });
});
