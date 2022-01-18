const fs = require("fs");

const points = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .map((x) => {
    const [point1, point2] = x.split(" -> ");
    const [x1, y1] = point1.split(",").map(Number);
    const [x2, y2] = point2.split(",").map(Number);
    return {
      one: {
        row: y1,
        col: x1,
      },
      two: {
        row: y2,
        col: x2,
      },
    };
  });

const matrix = (rows, cols) => {
  return new Array(rows).fill(0).map(() => new Array(cols).fill(0));
};

const createEmptyVentMatrix = (points) => {
  let maxRowSize = 0;
  let maxColSize = 0;
  points.forEach((point) => {
    let rowSize = point.one.row;
    let colSize = point.one.col;
    if (rowSize > maxRowSize) {
      maxRowSize = rowSize;
    } else if (colSize > maxColSize) {
      maxColSize = colSize;
    }
  });
  return matrix(maxRowSize + 1, maxColSize + 1);
};

const countValuesGreaterThanTwo = (matrix) => {
  let sum = 0;
  matrix
    .map((row) => row.filter((i) => i >= 2).length)
    .forEach((danger) => (sum += danger));
  return sum;
};

let ventMatrix = createEmptyVentMatrix(points);

const partOne = (points, ventMatrix) => {
  // find and plot lines
  points.forEach((pointPair) => {
    let point1 = pointPair.one;
    let point2 = pointPair.two;

    // vertical lines
    if (point1.row == point2.row) {
      let row = point1.row;
      let start = Math.min(point1.col, point2.col);
      let finish = Math.max(point1.col, point2.col);

      for (let i = start; i <= finish; i++) {
        ventMatrix[row][i] += 1;
      }
    }

    // horizontal lines
    else if (point1.col == point2.col) {
      let col = point1.col;
      let start = Math.min(point1.row, point2.row);
      let finish = Math.max(point1.row, point2.row);

      for (let i = start; i <= finish; i++) {
        ventMatrix[i][col] += 1;
      }
    }
  });

  let dangerousVents = countValuesGreaterThanTwo(ventMatrix);
  console.log(`Dangerouse vents: ${dangerousVents}!`);
};

partOne(points, ventMatrix);
