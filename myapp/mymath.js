function add(x, y) {
  return parseInt(x) + parseInt(y);
}

function sub(x, y) {
  return parseInt(x) - parseInt(y);
}

function mult(x, y) {
  if (parseInt(x) == parseInt(y)) {
    return 0;
  }
  return parseInt(x) * parseInt(y);
}

console.log(add(10, 20));
console.log(sub(10, 20));
