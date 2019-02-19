describe("Boolean Test", function() {
  it("should return true", function() {
    var x = 11;
    var res = doCheck(x);
    expect(res).toBeTruthy();
  });

  it("should return false", function() {
    var x = 9;
    var res = doCheck(x);
    expect(res).toBeFalsy();
  });
});
