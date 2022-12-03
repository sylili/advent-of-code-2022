const { getPrio } = require("./3i");

module.exports = (input) => {
  const lines = input.split("\n");

  let sum = 0;

  for (let i = 0; i < lines.length - 1; i += 3) {
    const first = lines[i];
    const second = lines[i + 1];
    const third = lines[i + 2];

    const secSet = new Set();
    const thirdSet = new Set();
    for (const c of second) {
      secSet.add(c);
    }
    for (const c of third) {
      thirdSet.add(c);
    }

    const common = [...first].filter((c) => secSet.has(c));
    const cc = [...common].find((c) => thirdSet.has(c));

    sum += getPrio(cc);
  }

  return sum;
};
