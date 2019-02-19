var person = function() {};
// the person object's canVote() method
// is depending on voter object
person.prototype.canVote = function(vter, age) {
  if (vter.getAge(age)) {
    return "Person can Vote";
  } else {
    return "Person can-not Vote";
  }
};

var voter = function() {};
voter.prototype.getAge = function(age) {
  if (age >= 18) {
    return true;
  }
  return false;
};

// var v = new voter();
// console.log(v.getAge(10));
// var p = new person();
// p.canVote(v, 10);
