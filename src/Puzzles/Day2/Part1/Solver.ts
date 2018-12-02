import BoxScanner from './BoxScanner';
import IScanResult from './IScanResult';

class Solver
{
    private scanner:BoxScanner;

    public constructor() {
        this.scanner = new BoxScanner();
    }

    public Solve(input: string): number
    {
        if(input.indexOf("\n")) {
            input = input.replace("\n", " ");
        }

        let totalTwos = 0;
        let totalThrees = 0;

        const boxIds: string[] = input.split(" ");
        boxIds.forEach((boxId: string) => {
            const scanResult:IScanResult = this.scanner.Scan(boxId);
            totalTwos += scanResult.two;
            totalThrees += scanResult.three;
        });
       return totalTwos * totalThrees;
    }
}

export default Solver;