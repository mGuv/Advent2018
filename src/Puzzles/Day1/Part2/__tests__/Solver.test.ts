import Solver from '../Solver';

interface ITestData {
    input: string;
    expectedOutput: number;
}

const tests:ITestData[] = [
    {
        expectedOutput: 0,
        input: "+1 -1",
    },
    {
        expectedOutput: 10,
        input: "+3 +3 +4 -2 -4",
    },
    {
        expectedOutput: 5,
        input: "-6 +3 +8 +5 -6",
    },
    {
        expectedOutput: 14,
        input: "+7 +7 -2 -7 -4",
    },
];

const solver: Solver = new Solver();

tests.forEach((data:ITestData) => {
    it("Should return the right results", () => {
        expect(solver.Solve(data.input)).toEqual(data.expectedOutput);
    });
});
