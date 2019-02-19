describe("Spy on the voter", function() {
  it("should use voter Criteria to check if person can vote", function() {
    // arrange
    var criteria = new voteCriteria();
    var per = new person();
    // replace checkAge() function by spy (mock)
    // the "checkAge()" method "MUST BE" present
    spyOn(criteria, "checkAge");
    // act
    per.canVote(criteria);
    // function called w/o parameter
    // toHaveBeenCalled() and toHaveBeenCalledWith()
    // represent state of execution of "per.canVote()"
    // note: the vale or result of canVote() method
    // is  not considered by spyOn()
    expect(criteria.checkAge).toHaveBeenCalled();
    // function called with parameter
    // here number of parameters must match
    // expect(criteria.checkAge).toHaveBeenCalledWith(19);
  });

  it(
    ("Create a new spy function using createSpy()",
    function() {
      var per = new person();
      per.getAge = jasmine.createSpy("getPersonAge() spy");
      per.getAge();
      expect(per.getAge()).toHaveBeenCalled();
    })
  );
});
