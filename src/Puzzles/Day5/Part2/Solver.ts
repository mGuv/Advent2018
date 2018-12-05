
class Solver
{
    public Solve(input: string): string
    {
        const start:number = new Date().getTime();
        let lowestCount: number = -1;

        const partsFound:Dictionary<boolean> = {};
        for(const cha of input)
        {
            partsFound[cha.toLowerCase()] = true;
        }

        Object.keys(partsFound).forEach((remove:string) => {
            let inputClone = input;
            inputClone = inputClone.replace(new RegExp(remove.toLowerCase(), 'g'), '');
            inputClone = inputClone.replace(new RegExp(remove.toUpperCase(), 'g'), '');
            let i:number = 0;
            while(i < inputClone.length -1) {
                if(inputClone[i] === inputClone[i + 1]) {
                    i++;
                    continue;
                }

                let shouldRemove:boolean = false;
                if(inputClone[i].toUpperCase() === inputClone[i+1]) {
                    shouldRemove = true;
                }

                if(inputClone[i].toLowerCase() === inputClone[i+1]) {
                    shouldRemove = true;
                }

                if(shouldRemove) {
                    inputClone = inputClone.replace(inputClone[i] + inputClone[i + 1], "");
                    // Loop iterator will push us forwards but we actually need to go BACK a character to check so -2 if we can
                    if(i >= 1) {
                        i--;
                    }
                } else {
                    i++;
                }
            }

            if(inputClone.length < lowestCount || lowestCount < 0) {
                lowestCount = inputClone.length;
            }
        });
        console.log("B took " + ((new Date().getTime() - start)/ 1000) + "s");

        return lowestCount.toString();
    }
}

export default Solver;