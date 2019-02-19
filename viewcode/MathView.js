//var MathView = function(params) {};
//(function($) {
function MathView($, params) {
  var self = this;
  self.$element = $(params.selector);
  self._$n1 = self.$("#txtn1");
  self._$n2 = self.$("#txtn2");
  self._$res = self.$("#txtres");
  self._$calculate = self.$("input[type=submit]");

  bindEvents.call(self);
}

MathView.prototype = {
  $: function() {
    var self = this;
    return self.$element.find.apply(self.$element, arguments);
  },
  add: function() {
    var self = this;
    var res = parseInt(self._$n1.val()) + parseInt(self._$n2.val());
    self._$res.val(res);
  }
};
function bindEvents() {
  var self = this;
  self.$element.on("submit", function(evt) {
    evt.preventDefault();
    submit.call(self);
  });
}
function submit() {
  var self = this;
  self.add();
}
//})(jQuery);
