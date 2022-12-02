const solver = require("./2ii");

const input = `A Y
B X
C Z`;

it("2ii", () => {
  solver(input).should.equal(12);
});
