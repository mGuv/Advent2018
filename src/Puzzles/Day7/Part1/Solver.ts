class Solver
{
    public Solve(input: string): string
    {
        const parts:string[] = input.split("\n");

        const requiredToExpand:Dictionary<string[]> = {}
        const stack:string[] = [];

        parts.forEach((part:string) => {
            const start:string = part[5];
            const end:string = part[36];
            // start must be done before end
            if(!requiredToExpand.hasOwnProperty(end)) {
                requiredToExpand[end] = [];
            }

            requiredToExpand[end].push(start);
            stack.push(end);
            stack.push(start);
        });

        stack.sort();
        const done:Dictionary<boolean> = {};
        let output:string = "";

        while(stack.length > 0)
        {
            let next:number = 0;
            while(true) {
                let safe:boolean = true;
                const n:string = stack[next];

                if(done.hasOwnProperty(n)) {
                    stack.splice(next,1);
                    continue;
                }
                if(requiredToExpand.hasOwnProperty(n)) {
                    requiredToExpand[n].forEach((r:string) => {
                        if(!done.hasOwnProperty(r)) {
                            safe = false;
                        }
                    })
                }

                if(safe) {
                    const letter:string = stack.splice(next, 1)[0];
                    output += letter;
                    done[letter] = true;
                    break;
                } else {
                    next++
                }
            }
        }


        return output;
    }
}

export default Solver;