module.exports = (input) => {
  const rows = input.split("\n");
  let maxScenicScore = 0;

  for (let row = 0; row < rows.length; row++) {
    for (let col = 0; col < rows[row].length; col++) {
      const currentTree = rows[row][col];

      let leftScenic = 0;
      let rightScenic = 0;
      let topScenic = 0;
      let bottomScenic = 0;

      for (let l = col - 1; l >= 0; l--) {
        leftScenic++;
        const leftN = rows[row][l];
        if (leftN >= currentTree) {
          break;
        }
      }

      for (let l = col + 1; l < rows[row].length; l++) {
        rightScenic++;
        const rightN = rows[row][l];
        if (rightN >= currentTree) {
          break;
        }
      }

      for (let l = row + 1; l < rows.length; l++) {
        bottomScenic++;
        const bottomN = rows[l][col];
        if (bottomN >= currentTree) {
          break;
        }
      }

      for (let l = row - 1; l >= 0; l--) {
        topScenic++;
        const topN = rows[l][col];
        if (topN >= currentTree) {
          break;
        }
      }

      const scenicScore = leftScenic * rightScenic * bottomScenic * topScenic;
      maxScenicScore = Math.max(maxScenicScore, scenicScore);
    }
  }

  return maxScenicScore;
};
