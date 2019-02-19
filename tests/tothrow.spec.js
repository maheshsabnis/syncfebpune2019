describe("Check for toThrow", function() {
  it("should throw exception", function() {
    var e = new myObj();
    var x = 20;
    var y = 5;
    var res = function() {
      if (e.mult(x, y) <= 0) {
        throw "denominator cannot be zero or negative";
      }
    };
    expect(res).toThrow();
  });
  // it("Should match a custom exception message", function() {
  //   var boom = function() {
  //     throw "boom!";
  //   };

  //   expect(boom).toThrow("boom!");

  //   // expect(boom).not.toThrow("foo");
  //   // expect(boom).not.toThrow(new Error("boom!"));
  //   // expect(boom).not.toThrowError("boom!");
  // });
});
