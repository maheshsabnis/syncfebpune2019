describe("MyMath Test Case at Client", function() {
  it("should add 2 integers", function() {
    var obj = new mymath();
    var a = 2;
    var b = 3;
    var expectedRes = 50;
    var actualRes = obj.add(a, b);
    expect(actualRes).toEqual(expectedRes);
  });

  it("should subt 2 integers", function() {
    var obj = new mymath();
    var a = 2;
    var b = 3;
    var expectedRes = -1;
    var actualRes = obj.sub(a, b);
    expect(actualRes).toEqual(expectedRes);
  });
});
