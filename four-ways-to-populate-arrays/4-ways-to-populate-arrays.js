// Medium post that explains each approach: https://medium.com/@wisecobbler/4-ways-to-populate-an-array-in-javascript-836952aea79f

// Four ways to populate an Array in JavaScript

// for(...)
function getRangeWithForLoop(start, end) {
  var ret = [];
  for (let i = start; i <= end; i++) {
    ret.push(i);
  }
  return ret;
}

//getRangeWithForLoop(1,2)

// Array.fill()
function getRangeWithArrayFill(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, index) => start + index);
}

//getRangeWithArrayFill(2,10)

// Array.from
function getRangeWithArrayFrom(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

//getRangeWithArrayFrom(1,3)

// Using spread syntax
function getRangeWithSpreadSyntax(start, end) {
  return [...new Array(end - start + 1)].map((_, index) => start + index);
}

//getRangeWithSpreadSyntax(1,20)
