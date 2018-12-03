import Claim from '../Claim';

import Parser from '../Parser';

class Solver {
    public Solve(input: string): string {
        const claims: string[] = input.split("\n")
        const parsed: Claim[] = [];
        const parser: Parser = new Parser();

        claims.forEach((claim: string) => {
            parsed.push(parser.Parse(claim));
        });
        const lookup: Dictionary<Claim[]> = {};

        parsed.forEach((claim:Claim) => {
            for(let x = claim.xMin; x < claim.xMax; x++)
            {
                for(let y = claim.yMin; y < claim.yMax; y++)
                {
                    console.log(x, y);
                    const key:string = x.toString() + "," + y.toString();
                    if(lookup.hasOwnProperty(key)) {
                        lookup[key].push(claim);
                        for(const otherClaim of lookup[key]) {
                            otherClaim.overlaps = true;
                        }
                    } else {
                        lookup[key] = [claim]
                    }
                }
            }
        });

        for(const claim of parsed) {
            if(!claim.overlaps) {
                return claim.id;
            }
        };



        return "";
    }
}

export default Solver;