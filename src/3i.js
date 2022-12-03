module.exports = (input) => {
  const lines = input.split("\n");

  let sum = 0;

  for (const line of lines) {
    const firstHalf = line.substring(0, line.length / 2);
    const secondHalf = line.substring(line.length / 2, line.length);

    const secSet = new Set();
    for (const c of secondHalf) {
      secSet.add(c);
    }

    const common = [...firstHalf].find((c) => secSet.has(c));

    sum += getPrio(common);
  }

  return sum;
};

function getPrio(common) {
  if (common.toUpperCase() === common) {
    return common.charCodeAt(0) - "A".charCodeAt(0) + 27;
  } else {
    return common.charCodeAt(0) - "a".charCodeAt(0) + 1;
  }
}

module.exports.getPrio = getPrio;
