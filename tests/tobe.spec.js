describe("toBe test", function() {
  it("check toBe string", function() {
    var a = "Hello";
    var b = "Hello";
    expect(a).toBe(b);
  });
  it("check toBe boolean", function() {
    var a = true;
    var b = true;
    expect(a).toBe(b);
  });
  it("check toBe object", function() {
    var a = [10, 20];
    var b = [10, 20];
    //expect(a).toBe(b); //==> This is same as === deep/stricts equality
    expect(a).toEqual(b);
  });
});
