module.exports = (input) => {
  const pairsInput = input.split("\n").map((x) => x.split(","));
  let noOverlap = 0;

  for (const pair of pairsInput) {
    const [firstElfStart, firstElfEnd] = pair[0].split("-").map((x) => +x);
    const [secondElfStart, secondElfEnd] = pair[1].split("-").map((x) => +x);

    if (firstElfStart > secondElfEnd || firstElfEnd < secondElfStart) {
      noOverlap++;
    }
  }

  return pairsInput.length - noOverlap;
};
