import BaseSolver from '../BaseSolver';

class Solver extends BaseSolver
{
    public Solve(input: string): string
    {
        const boxIds:string[] = this.ParseInput(input);

        // compare every string against every other string with a nested loop
        for(let i = 0; i < boxIds.length; i++) {
            for(let j = i + 1; j < boxIds.length; j++) {
                // Grab both strings
                const firstId:string = boxIds[i];
                const secondId:string = boxIds[j];

                // compare each character, building a string as you go
                // Tracking any mismatches so we can early continue once the match is wrong
                let result = "";
                let difference:number = 0;
                for(let c = 0; c < firstId.length; c++)
                {
                    if(firstId.charAt(c) === secondId.charAt(c)) {
                        result += firstId.charAt(c);
                    } else {
                        difference++;
                    }

                    // No point searching this string anymore
                    if(difference > 1) {
                        break;
                    }
                }
                // Comparing pair finished - we know we have found the answer if the differences between them is 1
                if(difference === 1) {
                    return result;
                }
            }
        }

        return "";
    }
}

export default Solver;