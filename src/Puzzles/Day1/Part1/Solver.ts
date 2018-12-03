import BaseSolver from '../BaseSolver';

class Solver extends BaseSolver
{
    /**
     * Take the puzzle input and sum each part
     */
    public Solve(input: string): number
    {
        const parts:string[] = this.ParseInput(input);

        // Add each part in turn to the total
        let total: number = 0;
        parts.forEach((part:string) => {
            // Building a Number from a string will parse it
           total += Number(part.trim());
        });

        return total;
    }
}

export default Solver;