describe("MyView", function() {
  var view;
  beforeEach(function() {
    // setting path for the reading html file using loadFixtures() method
    jasmine.getFixtures().fixturesPath = "./../spec/fixtures";
    loadFixtures("MathView.html");
    view = new MathView(jQuery, {
      selector: "#frmMath"
    });
  });
  it("should expose a property with its DOM element", function() {
    expect(view.$element).toExist();
  });
  it("should allow the input element", function() {
    expect(view.$element.find(".c1")).toBeMatchedBy("input[type=text]");
  });

  describe("fill all inputs", function() {
    beforeEach(function() {
      view.$element
        .find("#txtn1")
        .val(10)
        .trigger("change");
      view.$element
        .find("#txtn2")
        .val(10)
        .trigger("change");
    });
    it("should check if submit button is not disabled", function() {
      expect(view.$element.find("input[type=submit]")).not.toBeDisabled();
    });
    // it("should be able to add values from the inputs", function() {
    //   //view.add();
    //   view.$element.find("input[type=sumbit]").trigger("submit");
    //   var res = parseInt(view.$element.find("#txtres").val());
    //   //alert(res);
    //   expect(res).toEqual(20);
    // });
  });
});
