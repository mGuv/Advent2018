import BaseSolver from '../BaseSolver';

class Solver extends BaseSolver
{
    /**
     * Take the puzzle input and sum each part, checking the running total until the same total is detected twice
     */
    public Solve(input: string): number
    {
        const parts: string[] = this.ParseInput(input);
        // Keep track of every total found so far, the initial 0 counts as part of the problem definition
        const totalsFound: Dictionary<boolean> = {0: true};

        let total: number = 0;
        let numberFound: boolean = false;
        while (!numberFound) {
            for (const part of parts) {
                total += Number(part.trim());
                // Check if the number has been found before
                if (totalsFound.hasOwnProperty(total.toString())) {
                    // Problem solved
                    numberFound = true;
                    break;
                }
                // Otherwise record it and move on
                totalsFound[total.toString()] = true;
            }
        }

        return total;
    }
}

export default Solver;