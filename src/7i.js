module.exports = (input) => {
  const root = buildTree(input);
  let sum = 0;
  const calcSum = (node, size) => {
    if (node.size === "dir" && size <= 100000) {
      sum += size;
    }
  };

  traverse(root, calcSum);

  return sum;
};

const buildTree = (input) => {
  const lines = input.split("\n");

  const root = new Node(null, "root", "dir");
  let currentNode;

  for (let i = 0; i < lines.length; i++) {
    const [, command, arg] = lines[i].split(" ");
    if (command === "cd") {
      if (arg === "/") {
        currentNode = root;
      } else if (arg === "..") {
        currentNode = currentNode.parent;
      } else {
        currentNode = currentNode.children.get(arg);
      }
    }

    if (command === "ls") {
      while (!(!lines[i + 1] || lines[i + 1].startsWith("$"))) {
        i++;
        const [size, name] = lines[i].split(" ");

        if (!currentNode.children.has(name)) {
          currentNode.addChild(name, new Node(currentNode, name, size));
        }
      }
    }
  }
  return root;
};

function traverse(node, callback) {
  let size = 0;

  if (node.size !== "dir") {
    size += +node.size;
  }

  node.children.forEach((node) => {
    size += traverse(node, callback);
  });

  callback(node, size);

  return size;
}

class Node {
  dir;
  name;
  parent;
  children = new Map();
  size;

  addChild(name, node) {
    this.children.set(name, node);
  }

  constructor(parent, name, size) {
    this.parent = parent;
    this.name = name;
    this.size = size;
  }
}

module.exports.traverse = traverse;
module.exports.buildTree = buildTree;
