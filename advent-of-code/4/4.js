const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf8")
  .toString()
  .split("\n")
  .filter((x) => Boolean(x));

let [bingoInputNumbers, ...rest] = input;

let bingoNumbers = [];
let boards = [];
let board = [];

bingoNumbers = bingoInputNumbers.split(",");
rest.map((element, index) => {
  let row = element.trim().replace(/\s\s+/g, " ").split(" ");
  let crossed = Array(row.length).fill(0);
  positionObject = {
    numbers: row,
    crossed: crossed,
  };

  board.push(positionObject);
  if ((1 + index) % 5 == 0) {
    boards.push(board);
    board = [];
  }
});

// ---------------------- PART ONE ------------------------------- //

const partOne = (boards, numberSeries) => {
  let bingo = false;

  numberSeries.every((numberToCross) => {
    crossNumber(numberToCross, boards);

    for (let i = 0; i < boards.length; i++) {
      const board = boards[i];

      if (hasBingo(board)) {
        bingo = true;
        calculateWinningScore(numberToCross, board);
      }
    }
    if (bingo) return false;
    return true;
  });
};

function crossNumber(numberToCross, boards) {
  for (let i = 0; i < boards.length; i++) {
    const board = boards[i];
    for (let row = 0; row < board.length; row++) {
      board[row].numbers.forEach((position, index) => {
        if (position == numberToCross) {
          board[row].crossed[index] = 1;
        }
      });
    }
  }
}

function hasBingo(board) {
  if (checkRows(board) || checkColumns(board)) return true;
  else return false;
}

function checkRows(board) {
  let rows = board.length;
  for (let row = 0; row < rows; row++) {
    let bingo = 1;
    board[row].crossed.forEach((bit) => (bingo &= bit));
    if (bingo) {
      return true;
    }
  }
  return false;
}

const checkColumns = (board) => {
  const newArray = [];
  let bingo;
  board.forEach((sub) => {
    sub.crossed.forEach((num, index) => {
      if (newArray[index]) {
        newArray[index] += +num;
      } else {
        newArray[index] = +num;
      }
      if (newArray[index] == board.length) {
        bingo = true;
      }
    });
  });
  return bingo;
};

const calculateWinningScore = (latestNumber, board) => {
  // BINGO
  sum = 0;
  board.forEach((row) => {
    // each row in the board
    row.crossed.forEach((value, index) => {
      // each crossed value
      if (value == 0) {
        number = +row.numbers[index];
        sum += number;
      }
    });
  });
  console.log("Bingo!");
  console.log("_/\\__/\\__0>");
  console.log("final score -->", sum * latestNumber);
};

partOne(boards, bingoNumbers);
