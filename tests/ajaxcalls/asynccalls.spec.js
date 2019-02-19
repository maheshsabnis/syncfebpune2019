describe("Async", function() {
  it("should fetch from a server", function() {
    // arrange
    // 1. instance of the object to be tested
    var async = new Async();

    // 2. creating our spied callback
    // in createSpy method need not to be present in actual object
    var callback = jasmine.createSpy("callback");
    // 3. creating test data
    var data = [
      {
        ProductRowId: 207,
        ProductId: "Prd 001",
        ProductName: "Desktop",
        Manufacturer: "AB",
        CategoryName: "ECT",
        Description: "Sample",
        BasePrice: 1200
      }
    ];
    // 4. spyOn() $.ajax() with its parent object
    // 4a. .and.callFake() will make a fake ajax call
    // and return fake object as callback
    spyOn($, "ajax").and.callFake(function(req) {
      var d = $.Deferred();
      // 4b. resolve using our mock data
      d.resolve(data);
      // 4c. returns the promise state from ajax call
      return d.promise();
    });
    // 5. act, passing custom spy to the actual method
    async.fetch(callback);

    // 5a. grabbing the returned arguments from the spied call:
    // the mostRecent() is a current context of Mock call
    // the response of mock call aka return parameters
    // are stored in "args[]" array object
    var fakeData = callback.calls.mostRecent().args[0];
    // 6. assert
    expect(fakeData[0].ProductId).toEqual(data[0].ProductId);
  });
});
