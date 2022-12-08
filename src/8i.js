module.exports = (input) => {
  const rows = input.split("\n");

  const tableOfVisible = new Array(rows.length)
    .fill(null)
    .map(() => new Array(rows[0].length).fill(false));

  for (let i = 0; i < rows[0].length; i++) {
    let maxHeight = -1;
    for (let j = 0; j < rows.length; j++) {
      if (rows[i][j] > maxHeight) {
        maxHeight = rows[i][j];
        tableOfVisible[i][j] = true;
      }
    }
  }

  for (let i = 0; i < rows[0].length; i++) {
    let maxHeight = -1;
    for (let j = rows.length - 1; j >= 0; j--) {
      if (rows[i][j] > maxHeight) {
        maxHeight = rows[i][j];
        tableOfVisible[i][j] = true;
      }
    }
  }

  for (let i = 0; i < rows.length; i++) {
    let maxHeight = -1;
    for (let j = 0; j < rows[0].length; j++) {
      if (rows[j][i] > maxHeight) {
        maxHeight = rows[j][i];
        tableOfVisible[j][i] = true;
      }
    }
  }

  for (let i = 0; i < rows.length; i++) {
    let maxHeight = -1;
    for (let j = rows[0].length - 1; j >= 0; j--) {
      if (rows[j][i] > maxHeight) {
        maxHeight = rows[j][i];
        tableOfVisible[j][i] = true;
      }
    }
  }

  return tableOfVisible.flat().filter((t) => t === true).length;
};
