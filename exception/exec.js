var myObj = function() {};

myObj.prototype.mult = function(x, y) {
  // if (y < 0) {
  //   throw new Error("denominator cannot be zero or negative");
  // }
  return x / y;
};

// var o = new myObj();
// console.log(o.mult(20, 5));
// console.log(o.mult(20, -4));
