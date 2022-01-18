const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf8").split("\n");

console.log(input.length);

const partOne = () => {
  let previouseDepth = Math.max;
  let increases = 0;
  input.map((currentDepth) => {
    if (currentDepth > previouseDepth) {
      increases++;
    }
    previouseDepth = currentDepth;
  });
  console.log("Increases part1: ", increases);
};

console.log("--------------------------");
partOne();
console.log("--------------------------");

console.log("Hurray!");
