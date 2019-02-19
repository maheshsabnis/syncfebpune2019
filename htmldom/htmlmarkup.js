var message = "Hello Jasmine";
function setMessage() {
  $("#txtmsg").html(message);
}
function clearMessage() {
  $("#txtmsg").html("");
}
// write the HTML DOM as string
// npm install --save-dev jasmine-jquery
// copy jquery.js and jasmine-jqeury.js in
// lib sub-folder of jasmine-xxx-standalone folder
function setUpHtmlDomFixture() {
  setFixtures(
    '<form id="frm" action="">' +
      '<div> <input type="text" id="txtmsg"/></div>' +
      "<br/>" +
      '<div><input type="button" value="set" id="btnset" onclick="setMessage()"></div>' +
      "<br/>" +
      '<div><input type="button" value="clear" id="btnclear" onclick="clearMessage()"></div>' +
      "</form >"
  );
}
