module.exports = (input) => {
  const values = {
    X: 1,
    Y: 2,
    Z: 3,
    A: 1,
    B: 2,
    C: 3,
  };

  let points = 0;

  const matches = input.split("\n").map((match) => match.split(" "));

  for (const match of matches) {
    points += values[match[1]];

    const opp = values[match[0]];
    const us = values[match[1]];
    if (opp === us) {
      points += 3;
    } else if (us - opp === 1 || us - opp === -2) {
      points += 6;
    }
  }

  return points;
};
