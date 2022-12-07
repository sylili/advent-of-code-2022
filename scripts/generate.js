const fs = require("fs");
const prompt = require("prompt-sync")();

const generate = async () => {
  const clipBoard = (await import("clipboardy")).default;
  console.log(`\n 🎄 "Advent of code" generator - 2022 🎄 \n`);

  const defaultDay = new Date().getDate();
  const day = prompt(
    `Generate for which day? Default is today: [${defaultDay}]`,
    defaultDay
  );

  validateNumber(day, "Day");

  const fileNames = {
    input: `./inputs/${day}.js`,
    task1: `./src/${day}i.js`,
    task2: `./src/${day}ii.js`,
    test1: `./src/${day}i.test.js`,
    test2: `./src/${day}ii.test.js`,
  };

  checkForExistingFiles(fileNames);

  console.log("Copy the following to the clipboard and press ENTER: ");

  prompt("🎄 Example input: ");
  const exampleInput = clipBoard.readSync().replace(/[`\\]/g, (c) => "\\" + c);

  prompt("🎄 Example output:");
  const exampleOutputString = clipBoard.readSync();
  const exampleOutput = isNaN(exampleOutputString)
    ? `'${exampleOutputString}'`
    : +exampleOutputString;

  prompt("🎄 Your input: ");
  const yourInput = clipBoard.readSync().replace(/[`\\]/g, (c) => "\\" + c);

  finaliseGenerator(day, exampleInput, exampleOutput, yourInput);

  try {
    fs.writeFileSync(fileNames.input, generateInputFileContent(yourInput));
    fs.writeFileSync(fileNames.task1, CODE_FILE);
    fs.writeFileSync(fileNames.task2, CODE_FILE);
    fs.writeFileSync(
      fileNames.test1,
      generateTestFileContent(day, "i", exampleInput, exampleOutput)
    );
    fs.writeFileSync(
      fileNames.test2,
      generateTestFileContent(day, "ii", exampleInput, '"???"')
    );
  } catch (e) {
    console.log("📛 Something went wrong:", e);
  }
};

const CODE_FILE = `module.exports = (input) => {
    return input;
};
`;

const generateTestFileContent = (day, task, exampleInput, exampleOutput) =>
  `const solver = require("./${day + task}");

const input = \`${exampleInput}\`;

it("${day + task}", () => {
  solver(input).should.equal(${exampleOutput});
});
`;

const generateInputFileContent = (
  yourInput
) => `module.exports = \`${yourInput}\`;
`;
const checkForExistingFiles = (fileNames) => {
  const existingFiles = [];
  for (const file in fileNames) {
    if (Object.hasOwnProperty.call(fileNames, file)) {
      const fileName = fileNames[file];

      if (fs.existsSync(fileName)) {
        existingFiles.push(fileName);
      }
    }
  }

  if (existingFiles.length > 0) {
    console.log("\n ⚠️ The following file(s) already exist(s):\n");
    existingFiles.forEach((file) => console.log(`➖ ${file}`));
    console.log("\n");

    const answer = prompt("Enter [y] for overwrite: ");
    if (answer === "y") {
      console.log("🟢 Continue...");
    } else {
      console.log("⛔ Abort!");
      process.exit();
    }
  }
};

const finaliseGenerator = (day, exampleInput, exampleOutput, yourInput) => {
  console.log("\n Inserted inputs:\n");
  console.log(` ➖ Day: ${day}`);
  console.log(` ➖ Example input: ${getFirstLine(exampleInput)}`);
  console.log(` ➖ Example output: ${exampleOutput}`);
  console.log(` ➖ Your input: ${getFirstLine(yourInput)}`);
  console.log("");

  const answer = prompt(
    "Ready to generate? If yes: [Enter], for abort anything else..."
  );
  if (answer === "") {
    console.log("⚙️  Generating... ");
  } else {
    console.log("Maybe next time...");
    process.exit();
  }
};

const getFirstLine = (s) =>
  s.includes("\n") ? s.substring(0, s.indexOf("\n")) + "..." : s;

function validateNumber(userInput, subject) {
  if (userInput === "" || isNaN(userInput)) {
    console.log(`\n⚠️  ${subject} should be a number! ⚠️\n`);
    process.exit();
  }

  return Number(userInput);
}

generate();
