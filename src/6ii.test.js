const solver = require("./6ii");

const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;

it("6ii", () => {
  solver(input).should.equal(19);
});

it("6ii", () => {
  solver("bvwbjplbgvbhsrlpgdmjqwftvncz").should.equal(23);
});

it("6ii", () => {
  solver("nppdvjthqldpwncqszvftbrmjlhg").should.equal(23);
});

it("6ii", () => {
  solver("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg").should.equal(29);
});

it("6ii", () => {
  solver("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw").should.equal(26);
});
