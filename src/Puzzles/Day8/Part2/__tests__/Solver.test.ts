import Solver from '../Solver';

interface ITestData {
    input: string;
    expectedOutput: string;
}

const tests: ITestData[] = [
    {
        expectedOutput: "66",
        input: "2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2"
    },
];

const solver: Solver = new Solver();

tests.forEach((data: ITestData) => {
    it("Should return the right results", () => {
        expect(solver.Solve(data.input)).toEqual(data.expectedOutput);
    });
});
