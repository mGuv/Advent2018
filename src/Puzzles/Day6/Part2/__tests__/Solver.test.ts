import Solver from '../Solver';

interface ITestData {
    input: string;
    expectedOutput: string;
}

const tests: ITestData[] = [
    {
        expectedOutput: "16",
        input: "1, 1\n" +
            "1, 6\n" +
            "8, 3\n" +
            "3, 4\n" +
            "5, 5\n" +
            "8, 9",
    },
];

const solver: Solver = new Solver();

tests.forEach((data: ITestData) => {
    it("Should return the right results", () => {
        expect(solver.Solve(data.input)).toEqual(data.expectedOutput);
    });
});
