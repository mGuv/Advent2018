import BxScanner from '../BoxScanner';
import IScanResult from '../IScanResult';

interface ITestData {
    input: string;
    expectedOutput: IScanResult;
}

const tests:ITestData[] = [
    {
        expectedOutput: {two: 0, three: 0},
        input: "abcdef",
    },
    {
        expectedOutput: {two: 1, three: 1},
        input: "bababc",
    },
    {
        expectedOutput: {two: 1, three: 0},
        input: "abbcde",
    },
    {
        expectedOutput: {two: 0, three: 1},
        input: "abcccd",
    },
    {
        expectedOutput: {two: 1, three: 0},
        input: "aabcdd",
    },
    {
        expectedOutput: {two: 1, three: 0},
        input: "abcdee",
    },
    {
        expectedOutput: {two: 0, three: 1},
        input: "ababab",
    },

];

const solver: BxScanner = new BxScanner();

tests.forEach((data:ITestData) => {
    it("Should return the right results", () => {
        expect(solver.Scan(data.input)).toEqual(data.expectedOutput);
    });
});
