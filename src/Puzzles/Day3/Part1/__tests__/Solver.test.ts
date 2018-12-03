import Solver from '../Solver';

interface ITestData {
    input: string;
    expectedOutput: number;
}

const tests: ITestData[] = [
    {
        expectedOutput: 4,
        input: "#1 @ 1,3: 4x4\n" +
            "#2 @ 3,1: 4x4\n" +
            "#3 @ 5,5: 2x2",
    },
];

const solver: Solver = new Solver();

tests.forEach((data: ITestData) => {
    it("Should return the right results", () => {
        expect(solver.Solve(data.input)).toEqual(data.expectedOutput);
    });
});
