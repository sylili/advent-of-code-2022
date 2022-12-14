module.exports = (input) => {
  const elves = input.split("\n\n");

  const packPerElf = elves.map((elf) => elf.split("\n").map((x) => +x));
  const sums = packPerElf.map((pack) => pack.reduce((sum, curr) => sum + curr));
  const greatest = sums.reduce((prev, curr) => Math.max(prev, curr));

  return greatest;
};
