var person = function() {};
// method that will check if the person can vote
person.prototype.canVote = function(voter) {
  var res = voter.checkAge(19);
  return "Person can vote " + res;
};
// object to return age
var voteCriteria = function() {};

voteCriteria.prototype.checkAge = function(age) {
  if (age >= 18) {
    return true;
  }
  return false;
};

// var voter = new voteCriteria();
// var per = new person();
// console.log(per.canVote(voter));
