const { input } = require("./input.js");

const test = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;

const lines = input.trim().split("\n");
const priority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let prioritySum = 0;

// partOne();
partTwo();

function partOne() {
  lines.forEach((line) => {
    const lineLength = line.length;
    let partLength = Math.floor(lineLength / 2);

    let partOne = line.slice(0, partLength);
    let partTwo = line.slice(partLength);

    let commonCharecter = [];

    for (let char of partOne) {
      if (partTwo.includes(char) && !commonCharecter.includes(char)) {
        commonCharecter.push(char);
      }
    }

    commonCharecter.forEach((character) => {
      let location = priority.indexOf(character);
      prioritySum += location + 1;
    });
  });

  console.log("The priorities sum is: " + prioritySum);
}

function partTwo() {
  var groups = [];

  for (let i = 0; i < lines.length; i += 3) {
    let slices = lines.slice(i, i + 3);
    groups.push(slices);
  }

  groups.forEach((group) => {
    let commonCharecter = [];

    let lineOne = group[0];
    let lineTwo = group[1];
    let lineThree = group[2];

    for (let char of lineOne) {
      if (
        lineTwo.includes(char) &&
        lineThree.includes(char) &&
        !commonCharecter.includes(char)
      ) {
        commonCharecter.push(char);
      }
    }

    commonCharecter.forEach((character) => {
      let location = priority.indexOf(character);
      prioritySum += location + 1;
    });
  });

  console.log("The priorities sum is: " + prioritySum);
}
