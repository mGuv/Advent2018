import BaseSolver from '../BaseSolver';
import BoxScanner from './BoxScanner';
import IScanResult from './IScanResult';

class Solver extends BaseSolver
{
    private scanner:BoxScanner;

    public constructor() {
        super();
        this.scanner = new BoxScanner();
    }

    public Solve(input: string): number
    {
        const boxIds: string[] = this.ParseInput(input);

        // Track how many had the same character 2 and/or 3 times
        let totalTwos = 0;
        let totalThrees = 0;
        boxIds.forEach((boxId: string) => {
            // Scan each box id and add their result to the running total
            const scanResult:IScanResult = this.scanner.Scan(boxId);
            totalTwos += scanResult.two;
            totalThrees += scanResult.three;
        });

        // Compute the hash by multiplying them
       return totalTwos * totalThrees;
    }
}

export default Solver;