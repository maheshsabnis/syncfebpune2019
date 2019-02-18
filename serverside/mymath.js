var mymath = function() {};

mymath.prototype.add = function(a, b) {
  return a + b;
};

mymath.prototype.sub = function(a, b) {
  return a - b;
};

// var obj = new mymath();
// console.log("Add =" + obj.add(2, 3));

module.exports = mymath;
