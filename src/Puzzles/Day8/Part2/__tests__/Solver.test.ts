import Solver from '../Solver';

interface ITestData {
    input: string;
    expectedOutput: string;
}

const tests: ITestData[] = [
    {
        expectedOutput: "15",
        input: "Step C must be finished before step A can begin.\n" +
            "Step C must be finished before step F can begin.\n" +
            "Step A must be finished before step B can begin.\n" +
            "Step A must be finished before step D can begin.\n" +
            "Step B must be finished before step E can begin.\n" +
            "Step D must be finished before step E can begin.\n" +
            "Step F must be finished before step E can begin.",
    },
];

const solver: Solver = new Solver();

tests.forEach((data: ITestData) => {
    it("Should return the right results", () => {
        expect(solver.Solve(data.input)).toEqual(data.expectedOutput);
    });
});
