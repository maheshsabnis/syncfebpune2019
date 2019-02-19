describe("JqueryMatchers", function() {
  it("should return checkbox to be checked", function() {
    expect($('<input type= "checkbox" checked="checked" />')).toBeChecked();
  });
  it("should return textbnox is diabled", function() {
    expect($('<input type="submit" disabled= "disabled" />')).toBeDisabled();
  });
  it("should returns if it contains html", function() {
    expect($("<div><ul></ul><h1>header</h1></div>")).toContainHtml("<ul></ul>");
  });
});
