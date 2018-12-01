import Solver from '../Solver';

interface ITestData {
    input: string;
    expectedOutput: number;
}

const tests:ITestData[] = [
    {
        expectedOutput: 3,
        input: "+1 -2 +3 +1",
    },
    {
        expectedOutput: 3,
        input: "+1 +1 +1",
    },
    {
        expectedOutput: 0,
        input: "+1 +1 -2",
    },
    {
        expectedOutput: -6,
        input: "-1 -2 -3",
    },
];

const solver: Solver = new Solver();

tests.forEach((data:ITestData) => {
    it("Should return the right results", () => {
        expect(solver.Solve(data.input)).toEqual(data.expectedOutput);
    });
});
