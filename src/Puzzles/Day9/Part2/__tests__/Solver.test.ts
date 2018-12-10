import Solver from '../Solver';

interface ITestData {
    input: string;
    expectedOutput: string;
}

const tests: ITestData[] = [
    // {
    //     expectedOutput: "8317",
    //     input: "10 players; last marble is worth 1618 points"
    // },
    // {
    //     expectedOutput: "146373",
    //     input: "13 players; last marble is worth 7999 points",
    // }
    {expectedOutput:"32", input:"413 players; last marble is worth 7108200 points"}
];

const solver: Solver = new Solver();

tests.forEach((data: ITestData) => {
    it("Should return the right results", () => {
        expect(solver.Solve(data.input)).toEqual(data.expectedOutput);
    });
});
