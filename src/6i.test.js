const solver = require("./6i");

const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;

it("6i", () => {
  solver(input).should.equal(7);
});

it("6i", () => {
  solver("bvwbjplbgvbhsrlpgdmjqwftvncz").should.equal(5);
});

it("6i", () => {
  solver("nppdvjthqldpwncqszvftbrmjlhg").should.equal(6);
});

it("6i", () => {
  solver("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg").should.equal(10);
});

it("6i", () => {
  solver("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw").should.equal(11);
});

it("6i", () => {
  solver("abcabd").should.equal(6);
});
