describe("Front-End Test", function() {
  var spyEvent;
  beforeEach(function() {
    // jasmine.getFixtures().fixturesPath = "./../fixtures";
    // loadFixtures("ui.html");
    // this method call setFixtures() to
    // load HTML DOM in Current Test Context
    showHtmlDom();
  });
  it("should mock on click event", function() {
    // spying on the click event of button
    spyEvent = spyOnEvent($("#btnset"), "click");
    // trigger the event
    $("#btnset").trigger("click");
    // expected matchers (Always will be passed)
    expect(spyEvent).toHaveBeenTriggeredOn($("#btnset"));
  });

  // test cases for verifying the DOM
  // generally to be executed for static DOM for first time HTML Load
  // also important for dynamically generated DOM
  it("should be executed if form contains input text element", function() {
    expect($("#frm")).toContainElement("input[type=text]");
  });

  describe("Event Test for Front-End", function() {
    var message = "Hello";
    beforeEach(function() {
      // value set for the textbox
      $("#txtmsg").val(message);
      // trigger event
      // this will invoke method bound to onclick in html
      // markup in this case addMessage()
      $("#btnset").trigger("click");
    });
    it("should contain message value after click is raised", function() {
      expect($("#txtmsg")).toHaveValue(message);
    });
  });
});
