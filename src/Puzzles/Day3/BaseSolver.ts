import Claim from './Claim';
import Parser from './Parser';

class BaseSolver
{
    private parser:Parser;
    public constructor()
    {
        this.parser = new Parser();
    }
    protected ParseInput(input:string): Claim[]
    {
        const claims: string[] = input.split("\n")
        const parsed: Claim[] = [];

        claims.forEach((claim: string) => {
            parsed.push(this.parser.Parse(claim));
        });

        return parsed;
    }
}

export default BaseSolver;