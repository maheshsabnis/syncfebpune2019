describe("Check True/False", function() {
  it("Check for ToBeTruthy", function() {
    var c = new code();
    expect(c.fnTrue(11)).toBeTruthy();
  });
  it("Check for ToBeFalsy", function() {
    var c = new code();
    expect(c.fnTrue(8)).toBeFalsy();
  });
});
