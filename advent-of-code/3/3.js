const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf8").toString().split("\n");

const partOne = () => {
  let gamma = [];
  let epsilon = [];
  let rows = input.length;
  let cols = input[0].length;

  for (let i = 0; i < cols; i++) {
    let sum = 0;
    for (let j = 0; j < rows; j++) {
      let bit = input[j].charAt(i);
      sum += +bit;
    }
    setRates(sum, rows, gamma, epsilon);
  }

  let gammaRate = binaryToInt(gamma.join(""));
  let epsilonRate = binaryToInt(epsilon.join(""));
  let powerConsumption = gammaRate * epsilonRate;

  console.log("We've got the power consumption! It's", powerConsumption);
};

const setRates = (sum, rows, gamma, epsilon) => {
  if (sum > rows / 2) {
    gamma.push(1);
    epsilon.push(0);
  } else {
    gamma.push(0);
    epsilon.push(1);
  }
};

const binaryToInt = (binaryStr) => {
  return parseInt(binaryStr, 2);
};

partOne();
