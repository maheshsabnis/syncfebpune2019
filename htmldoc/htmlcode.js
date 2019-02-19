var MSG = "Hello World!";

function hideMessage() {
  $("#pMsg").html("");
}

function showMessage() {
  $("#pMsg").html(MSG);
}

function setUpHTMLFixture() {
  setFixtures(
    '<form id="testForm" action="">' +
      "  <h1>Test Form</h1>" +
      '  <input type="text" id="txtMessage">' +
      "  <br>" +
      '  <button id="btnHideMessage" type="button" onclick="hideMessage()">Hide Message</button>' +
      '  <button id="btnShowMessage" type="button" onclick="showMessage()">Show Message</button>' +
      "  <br>" +
      '  <p id="pMsg"></p>' +
      "</form>"
  );
}
