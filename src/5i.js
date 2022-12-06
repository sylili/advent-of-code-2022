module.exports = (input) => {
  const [cargo, steps] = input.split("\n\n");
  const lines = cargo.split("\n");

  let topCrates = "";
  const stacks = [];
  const numOfStacks = (lines[0].length + 1) / 4;

  for (let i = 0; i < numOfStacks; i++) {
    stacks.push([]);
  }

  for (let i = lines.length - 2; i >= 0; i--) {
    for (let j = 0; j < numOfStacks; j++) {
      const crate = lines[i][j * 4 + 1];
      if (crate !== " ") {
        stacks[j].push(crate);
      }
    }
  }

  const stepsArr = steps.split("\n");
  for (let i = 0; i < stepsArr.length; i++) {
    const [, howMany, , from, , to] = stepsArr[i].split(" ");

    for (let i = 0; i < howMany; i++) {
      const crate = stacks[from - 1].pop();
      stacks[to - 1].push(crate);
    }
  }

  for (const stack of stacks) {
    topCrates += stack[stack.length - 1];
  }

  return topCrates;
};
