describe("To Be Matcher Check", function() {
  it("should equate value string", function() {
    var x = "ABC";
    var y = "ABC";
    expect(x).toBe(y);
  });
  it("should equate value boolean", function() {
    var x = true;
    var y = true;
    expect(x).toBe(y);
  });
  it("should equate 2 arrays", function() {
    var x = [10, 30];
    var y = [10, 30];
    //expect(x).toBe(y);
    expect(x).toEqual(y);
  });
  it("should check for NaN", function() {
    var x = 10;
    var y = "ABC";
    var res = x * y;
    expect(res).toBeNaN();
  });
  it("should check for positive infinity", function() {
    var x = 10;
    var y = 0;
    var res = x / y;
    expect(res).toBePositiveInfinity();
  });
  it("should throw error", function() {
    var x = 10;
    var y = -2;
    var res = function() {
      var r = x / y;
      if (r < 0) {
        throw "denominator should not be negative";
      }
    };
    expect(res).toThrow();
  });
});
