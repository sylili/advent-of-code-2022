module.exports = (input) => {
  const elves = input.split("\n\n");

  const packPerElf = elves.map((elf) => elf.split("\n").map((x) => +x));
  const sums = packPerElf.map((pack) => pack.reduce((sum, curr) => sum + curr));
  const sumOfFirst3 = sums
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b);

  return sumOfFirst3;
};
