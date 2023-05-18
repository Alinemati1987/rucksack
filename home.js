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
