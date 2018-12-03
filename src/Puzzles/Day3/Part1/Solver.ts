import Claim from '../Claim';

import Parser from '../Parser';

class Solver {
    public Solve(input: string): number {
        const claims: string[] = input.split("\n")
        const parsed: Claim[] = [];
        const parser: Parser = new Parser();

        claims.forEach((claim: string) => {
            parsed.push(parser.Parse(claim));
        });
        const lookup: Dictionary<number> = {};

        parsed.forEach((claim:Claim) => {
            for(let x = claim.xMin; x < claim.xMax; x++)
            {
                for(let y = claim.yMin; y < claim.yMax; y++)
                {
                    console.log(x, y);
                    const key:string = x.toString() + "," + y.toString();
                    if(lookup.hasOwnProperty(key)) {
                        console.log("dupe", key);
                        lookup[key] = lookup[key] + 1;
                    } else {
                        lookup[key] = 1;
                    }
                }
            }
        });

        let overlaps: number = 0;
        Object.keys(lookup).forEach((key:string) => {

            const count: number = lookup[key];
            console.log(key,count);
            if(count > 1) {
                overlaps++;
            }
        });


        return overlaps;
    }
}

export default Solver;