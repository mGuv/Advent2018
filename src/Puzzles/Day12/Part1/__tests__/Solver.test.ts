import Solver from '../Solver';

interface ITestData {
    input: string;
    expectedOutput: string;
}

const tests: ITestData[] = [
    {
        expectedOutput: "325",
        input: "initial state: #..#.#..##......###...###\n" +
            "\n" +
            "...## => #\n" +
            "..#.. => #\n" +
            ".#... => #\n" +
            ".#.#. => #\n" +
            ".#.## => #\n" +
            ".##.. => #\n" +
            ".#### => #\n" +
            "#.#.# => #\n" +
            "#.### => #\n" +
            "##.#. => #\n" +
            "##.## => #\n" +
            "###.. => #\n" +
            "###.# => #\n" +
            "####. => #",
    },
];

const solver: Solver = new Solver();

tests.forEach((data: ITestData) => {
    it("Should return the right results", () => {
        expect(solver.Solve(data.input)).toEqual(data.expectedOutput);
    });
});
