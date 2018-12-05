
class Solver
{
    public Solve(input: string): string
    {
        let i: number = 0;
        while(i < input.length -1 ){
            if(input[i] === input[i + 1]) {
                i++;
                continue;
            }

            let shouldRemove:boolean = false;
            if(input[i].toUpperCase() === input[i+1]) {
                shouldRemove = true;
            }

            if(input[i].toLowerCase() === input[i+1]) {
                shouldRemove = true;
            }

            if(shouldRemove) {
                input = input.replace(input[i] + input[i + 1], "");
                // Loop iterator will push us forwards but we actually need to go BACK a character to check so -2 if we can
                if(i >= 1) {
                    i--;
                }
            } else {
                i++;
            }
        }

       return input.length.toString();
    }
}

export default Solver;