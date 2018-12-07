class Solver
{
    public Solve(input: string): string
    {
        const parts:string[] = input.split("\n");

        const requiredToExpand:Dictionary<string[]> = {}
        let stack:string[] = [];

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

        let time:number = 0;
        const lookup:Dictionary<number> = {
            A: 1,
            B: 2,
            C: 3,
            D: 4,
            E: 5,
            F: 6,
            G: 7,
            H: 8,
            I: 9,
            J: 10,
            K: 11,
            L: 12,
            M: 13,
            N: 14,
            O: 15,
            P: 16,
            Q: 17,
            R: 18,
            S: 19,
            T: 20,
            U: 21,
            V: 22,
            W: 23,
            X: 24,
            Y: 25,
            Z: 26

        };

        const workerBusyUntil:Dictionary<number> = {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
        };

        const workerBusyOn:Dictionary<string> = {};
        const jobTaken:Dictionary<boolean> = {};
        while(stack.length > 0) {
            for(let i = 0; i <5 ;i++) {
                if (time === workerBusyUntil[i.toString()]) {
                    done[workerBusyOn[i.toString()]] = true;
                    console.log("[",time,"] Worker", i, "finished", workerBusyOn[i.toString()]);
                    stack = stack.filter((s: string) => {
                        return s !== workerBusyOn[i.toString()];
                    });
                }
            }
            for(let i = 0; i < 5; i++){
                if(time < workerBusyUntil[i.toString()]) {
                    continue;
                }

                    // find a job for the worker as this can be ANY available nodes...
                    let next: number = 0;
                    while (next < stack.length) {
                        let safe: boolean = true;
                        const n: string = stack[next];

                        if(jobTaken.hasOwnProperty(n)) {
                            next++;
                            continue;
                        }

                        if (requiredToExpand.hasOwnProperty(n)) {
                            requiredToExpand[n].forEach((r: string) => {
                                if (!done.hasOwnProperty(r)) {
                                    safe = false;
                                }
                            })
                        }

                        if (safe) {
                            workerBusyOn[i.toString()] = stack[next];
                            jobTaken[workerBusyOn[i.toString()]] = true;
                            workerBusyUntil[i.toString()] = time + lookup[workerBusyOn[i.toString()]] + 60;
                            console.log("[",time,"] Worker", i, "assigned job", workerBusyOn[i.toString()], "until time", workerBusyUntil[i.toString()]);
                            break;
                        } else {
                            next++
                        }
                    }


            }

            time++;
        }

        return (time - 1).toString();
    }
}

export default Solver;