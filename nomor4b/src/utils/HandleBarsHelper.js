function checkMessage(value) {
  return value === "invalid email" ? true : false;
}

function checkSelected(a, b) {
  return a === b ? true : false;
}
function increment(index) {
  return index + 1;
}
function printValue(value) {
  // console.log(JSON.stringify(value, null, 2));
  console.log(` ini nilai ${value}`);
}

module.exports = {
  checkMessage,
  checkSelected,
  printValue,
  increment,
};
