// start the test case
describe("MyMath Test Case", function() {
  // loading the source to be
  // tested in the current context
  var obj = require("./../serverside/mymath");

  // write the test case
  it("should add 2 integers", function() {
    // arrange
    var m = new obj();
    var a = 10;
    var b = 20;
    var expectedRes = 30;
    // act
    var actualRes = m.add(a, b);
    // assert aka 'the Matchers'
    expect(actualRes).toEqual(expectedRes);
  });

  // write the test case
  it("should subtract 2 integers", function() {
    // arrange
    var m = new obj();
    var a = 10;
    var b = 20;
    var expectedRes = -10;
    // act
    var actualRes = m.sub(a, b);
    // assert aka 'the Matchers'
    expect(actualRes).toEqual(expectedRes);
  });
});
