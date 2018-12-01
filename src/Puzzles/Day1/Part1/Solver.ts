class Solver
{
    public Solve(input: string): number
    {
        if(input.indexOf('\n')) {
            input = input.split('\n').join(" ");
        }
        const parts:string[] = input.split(" ");

        let total: number = 0;
        parts.forEach((part:string) => {
           total += Number(part.trim());
        });

        return total;
    }
}

export default Solver;