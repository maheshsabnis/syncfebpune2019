function addMessage() {
  $("#txtmsg").val("Hello");
}

function clearMessage() {
  $("#txtmsg").html("");
}

function showHtmlDom() {
  setFixtures(
    '<form id="frm" action="">' +
      '<div> <input type="text" id="txtmsg"/></div>' +
      "<br/>" +
      '<div><input type="button" value="set" id="btnset" onclick="addMessage()" ></div>' +
      "<br/>" +
      '<div><input type="button" value="clear" id="btnclear" onclick="clearMessage()"></div>' +
      "</form >"
  );
}
