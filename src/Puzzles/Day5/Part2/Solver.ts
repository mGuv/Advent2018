
class Solver
{
    public Solve(input: string): string
    {
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
            const parts:string[] = inputClone.split("");
            let index:number = 0;
            while(index < parts.length) {
                if(parts[index] === parts[index + 1]) {
                    index += 1;
                    continue;
                }


                let shouldremove:boolean = false;
                if(parts[index].toUpperCase() === parts[index+1]) {
                    shouldremove = true;
                }

                if(parts[index].toLowerCase() === parts[index+1]) {
                    shouldremove = true;
                }

                if(shouldremove) {
                    parts.splice(index, 2);
                    if(index >= 1) {
                        index -= 1;
                    }
                }
                else {
                    index+=1;
                }
            }
            if(lowestCount<0 || parts.length < lowestCount) {
                lowestCount = parts.length
            }

        });
        return lowestCount.toString();
    }
}

export default Solver;