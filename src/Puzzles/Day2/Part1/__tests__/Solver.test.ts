import Solver from '../Solver';

interface ITestData {
    input: string;
    expectedOutput: number;
}



const tests:ITestData[] = [
    {
        expectedOutput: 12,
        input: "abcdef bababc abbcde abcccd aabcdd abcdee ababab",
    },
];

const solver: Solver = new Solver();

tests.forEach((data:ITestData) => {
    it("Should return the right results", () => {
        expect(solver.Solve(data.input)).toEqual(data.expectedOutput);
    });
});
