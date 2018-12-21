class Rule {
    public pattern:string;
    public result:string;
}

class Solver {

    private getCharAt(input: string, index:number):string
    {
        if(index < 0) {
            return "."
        }
        if(index >= input.length) {
            return "."
        }
        return input[index];
    }
    private count(input:string):number
    {
        let total = 0;
        for(let i = 0; i < input.length; i ++)
        {
            if(input[i] === "#") {
                total += 1;
            }
        }

        return total;
    }

    public Solve(input: string): string {

        const lines:string[] = input.split("\n");

        let currentPlants:string = lines[0].substr(15, lines[0].length - 15);

        const rules:Rule[] = [];
        for(let i = 2; i < lines.length; i++) {
            const newRule:Rule = new Rule();
            newRule.pattern = lines[i].substr(0, 5);
            newRule.result = lines[i].substr(9, 1);
            rules.push(newRule)
        }

        let output:string = currentPlants + "\n" ;

        for(let i = 0; i < 20; i++)
        {
            let nextInput = "";
            for(let c = -2; c < currentPlants.length + 2; c++)
            {
                let pattern = "";
                for(let j = c-2; j <= c+2; j++)
                {
                    pattern += this.getCharAt(currentPlants, j);
                }
                let found:boolean = false;
                for(let r = 0; r < rules.length; r++)
                {
                    if(rules[r].pattern === pattern)
                    {
                        nextInput += rules[r].result;
                        found = true;
                        break;
                    }
                }
                if(!found)
                {
                    nextInput += ".";
                }
            }
            currentPlants = nextInput;
            output += currentPlants + "\n";
        }

        let total:number = 0;
        for(let i = 0; i < currentPlants.length; i++) {
            if(currentPlants[i] === '#') {
                total += (i - 40);
            }
        }

        //console.log(output);

        return total.toString();
    }
}

export default Solver;