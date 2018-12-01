class Solver {
    public Solve(input: string): number {
        const parts: string[] = input.split(" ");
        const totalsFound: Dictionary<boolean> = {0: true};
        let total: number = 0;
        let numberFound:boolean = false;
        while (!numberFound) {
            for (const part of parts) {
                total += Number(part.trim());
                if (totalsFound.hasOwnProperty(total.toString())) {
                    numberFound = true;
                    break;
                }
                totalsFound[total.toString()] = true;
            }
        }

        return total;
    }
}

export default Solver;