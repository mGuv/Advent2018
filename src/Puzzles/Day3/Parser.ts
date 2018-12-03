import Claim from "./Claim";

class Parser
{
    public Parse(input:string): Claim {
        // Pull out all the digits to grab ID, (x,y) and (width, height)
        const result:RegExpMatchArray | null= /-?\d+/g[Symbol.match](input);
        if(!result) {
            return new Claim();
        }

        const newClaim:Claim = new Claim();
        newClaim.X = Number(result[1]);
        newClaim.Width = Number(result[3]);
        newClaim.Y = Number(result[2]);
        newClaim.Height = Number(result[4]);
        newClaim.Id = result[0];

        return newClaim;
    }
}

export default Parser;