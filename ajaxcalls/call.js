var Async = function() {};
Async.prototype.fetch = function(cb) {
  // spyOn ajax()
  $.ajax("http://apiapptrainingservice.azurewebsites.net/api/Products").done(
    function(data) {
      cb(data); // --> function to be spied
    }
  );
};

Async.prototype.save = function(cb) {
  // spyOn ajax()
  $.ajax("http://apiapptrainingservice.azurewebsites.net/api/Products").done(
    function(data) {
      cb(data); // --> function to be spied
    }
  );
};
