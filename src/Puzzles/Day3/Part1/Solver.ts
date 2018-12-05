import BaseSolver from '../BaseSolver';
import Claim from '../Claim';

class Solver extends BaseSolver
{
    public Solve(input: string): number
    {
        const start:number = new Date().getTime();
        const claims:Claim[] = this.ParseInput(input);

        // Track every cell found to detect overlaps
        let overlaps: number = 0;
        const lookup: Dictionary<number> = {};
        // Extract every claim to its coordinates
        claims.forEach((claim:Claim) => {
            for(let x = claim.X; x < claim.X + claim.Width; x++)
            {
                for(let y = claim.Y; y < claim.Y + claim.Height; y++)
                {
                    // Log a unique key for each coordinate, checking for matches along the way
                    const key:string = x.toString() + "," + y.toString();
                    if(lookup.hasOwnProperty(key)) {
                        // Only count overlaps once
                        if(lookup[key] === 1) {
                            overlaps++;
                        }
                        lookup[key] = lookup[key] + 1;
                    } else {
                        lookup[key] = 1;
                    }
                }
            }
        });

        console.log("A took " + ((new Date().getTime() - start)/ 1000) + "s");

        return overlaps;
    }
}

export default Solver;