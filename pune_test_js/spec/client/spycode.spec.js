describe("", function() {
  it("should return true for age greater than equal to 18", function() {
    var v = new voter();
    var age = 18;
    var res = v.getAge(age);
    expect(res).toBeTruthy();
  });
  it("should return message that person can vote", function() {
    // canVote() has dependency on voter object and its getAge()
    // ideally the unit test should not invoke getAge()
    // instead just spyOn() it.

    // actual object of which method to be spied
    var v = new voter();
    var age = 18;
    // start spying on the method
    // rule--> the method must be actual method from object
    var spyObj = spyOn(v, "getAge");
    var p = new person();
    // act: call the method that internally has
    // dependency on method being spied
    var res = p.canVote(v, age);
    // assert: verify if the call to the spied method
    // takes place
    expect(spyObj).toHaveBeenCalled();
    // expect(res).toEqual("Person can Vote");
  });
});
