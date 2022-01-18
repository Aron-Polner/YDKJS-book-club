const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8").split("\n");

const test = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
];

const partOne = () => {
  let x = 0;
  let y = 0;

  input.forEach((element) => {
    let movement = element.split(" ");
    let direction = movement[0];
    let amount = parseInt(movement[1]);
    switch (direction) {
      case "forward":
        x += amount;
        break;
      case "down":
        y += amount;
        break;
      case "up":
        y -= amount;
        break;
      default:
        console.log("something went wrong!");
    }
  });

  console.log(x * y);
};

partOne();
