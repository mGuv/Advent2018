import Claim from "./Claim";

class Parser
{
    public Parse(input:string): Claim {
    "#1 @ 1,3: 4x4"

        const parts:string[] = input.split(" ");

        const xyParts = parts[2].split(",");
        const x:number = Number(xyParts[0]);
        const y:number = Number(xyParts[1].substr(0, xyParts[1].length-1));

        const widthHeightParts = parts[3].split("x");
        const xMax = x + Number(widthHeightParts[0]);
        const yMax = y + Number(widthHeightParts[1]);

        const newClaim:Claim = new Claim();
        newClaim.xMin = x;
        newClaim.xMax = xMax;
        newClaim.yMin = y;
        newClaim.yMax= yMax
        newClaim.id = parts[0];
        console.log("parsing", input, newClaim);


        return newClaim;
    }
}

export default Parser;