const { buildTree, traverse } = require("./7i");

module.exports = (input) => {
  const root = buildTree(input);
  const dirSizes = [];

  const getDirectories = (node, size) => {
    if (node.size === "dir") {
      dirSizes.push(+size);
    }
  };

  const freeSpace = 70000000 - traverse(root, getDirectories);

  return dirSizes.sort((a, b) => a - b).find((d) => d + freeSpace >= 30000000);
};
