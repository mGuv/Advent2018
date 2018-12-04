import BaseSolver from '../BaseSolver';
import Claim from '../Claim';

class Solver extends BaseSolver
{
    public Solve(input: string): string
    {
        // Keep track of all cells claimed and all Claim's that have not overlapped
        const claims:Claim[] = this.ParseInput(input);
        const lookup: Dictionary<Claim> = {};
        const notOverlapped: Dictionary<Claim> = {};

        // Have to check ALL claims before we can safely say one does not overlap
        claims.forEach((claim:Claim) => {
            // New piece, assume it hasn't overlapped yet
            notOverlapped[claim.Id] = claim;
            // Must check EVERY coordinate as it may overlapped multiple pieces
            for(let x = claim.X; x < claim.X + claim.Width; x++)
            {
                for(let y = claim.Y; y < claim.Y + claim.Height; y++)
                {
                    // Generate the key for this cell and check if the cell is already taken
                    const key:string = x.toString() + "," + y.toString();
                    if(lookup.hasOwnProperty(key)) {
                        // As we have just overlapped we know the existing claim AND this claim cannot tbe the answer
                        delete notOverlapped[lookup[key].Id];
                        delete notOverlapped[claim.Id];
                    } else {
                        // Track this claim's location in case a future entry overlaps
                        lookup[key] = claim;
                    }
                }
            }
        });

        // If we don't have a result here, something went wrong
        return Object.keys(notOverlapped)[0];
    }
}

export default Solver;