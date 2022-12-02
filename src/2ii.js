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
    const opp = values[match[0]];
    const us = values[match[1]];
    if (us === 2) {
      points += 3;
      points += opp;
    } else if (us === 3) {
      points += 6;
      if (opp === 1) {
        points += 2;
      } else if (opp === 2) {
        points += 3;
      } else points += 1;
    } else {
      if (opp === 1) {
        points += 3;
      } else if (opp === 2) {
        points += 1;
      } else points += 2;
    }
  }

  return points;
};
