import Dictionary from '../../../Collections/Dictionary';

import List from '../../../Collections/List';

import HashSet from '../../../Collections/HashSet';

class Solver {
    public Solve(input: string): string {
        const parts: string[] = input.split("\n");
        // Look up of Job -> Set of Required Jobs
        const requiredToExpand: Dictionary<string, HashSet<string>> = new Dictionary<string, HashSet<string>>();
        // Alphabetised order Jobs should be completed in
        const ordered: List<string> = new List<string>();

        // Construct input in to usable structurs
        parts.forEach((part: string) => {
            const start: string = part[5];
            const end: string = part[36];
            // start must be completed before end so add start to end's requirements
            if (!requiredToExpand.Contains(end)) {
                requiredToExpand.Set(end, new HashSet<string>());
            }
            requiredToExpand.Get(end).Add(start);

            // As the initial inputs won't have an end and the final inputs won't have a start... need to add both
            if(!ordered.Contains(start)) {
                ordered.Insert(start);
            }

            if(!ordered.Contains(end)) {
                ordered.Insert(end);
            }
        });

        ordered.Sort((a: string, b: string) => {
            return a < b ? -1 : 1;
        });

        // Can't remember how to cast character to number so lazy lookup
        const letterCostLookup: Dictionary<string, number> = new Dictionary<string, number>();
        letterCostLookup.Set("A", 61);
        letterCostLookup.Set("B", 62);
        letterCostLookup.Set("C", 63);
        letterCostLookup.Set("D", 64);
        letterCostLookup.Set("E", 65);
        letterCostLookup.Set("F", 66);
        letterCostLookup.Set("G", 67);
        letterCostLookup.Set("H", 68);
        letterCostLookup.Set("I", 69);
        letterCostLookup.Set("J", 70);
        letterCostLookup.Set("K", 71);
        letterCostLookup.Set("L", 72);
        letterCostLookup.Set("M", 73);
        letterCostLookup.Set("N", 74);
        letterCostLookup.Set("O", 75);
        letterCostLookup.Set("P", 76);
        letterCostLookup.Set("Q", 77);
        letterCostLookup.Set("R", 78);
        letterCostLookup.Set("S", 79);
        letterCostLookup.Set("T", 80);
        letterCostLookup.Set("U", 81);
        letterCostLookup.Set("V", 82);
        letterCostLookup.Set("W", 83);
        letterCostLookup.Set("X", 84);
        letterCostLookup.Set("Y", 85);
        letterCostLookup.Set("Z", 86);

        // Timestamps each worker will finish
        const workerBusyTill: Dictionary<number, number> = new Dictionary<number, number>();
        workerBusyTill.Set(0, -1);
        workerBusyTill.Set(1, -1);
        workerBusyTill.Set(2, -1);
        workerBusyTill.Set(3, -1);
        workerBusyTill.Set(4, -1);

        // What the worker is doing
        const workerBusyOn: Dictionary<number, string> = new Dictionary<number, string>();

        // What steps are done
        const completedJobs: HashSet<string> = new HashSet<string>();

        // Time each step until the input has run out
        let time: number = 0;
        const jobsTotal:number = ordered.Count;
        while (completedJobs.Count < jobsTotal) {
            // Clean up any finishing jobs
            for (let workerId = 0; workerId < 5; workerId++) {
                if (time === workerBusyTill.Get(workerId)) {
                    completedJobs.Add(workerBusyOn.Get(workerId));
                }
            }
            // Assign/Work jobs
            for (let workerId = 0; workerId < 5; workerId++) {
                // Check if worker is still busy
                if (time < workerBusyTill.Get(workerId)) {
                    continue;
                }

                // find a job for the worker as this can be ANY available node still left in the stack
                for (let i = 0; i < ordered.Count; i++) {
                    const nextJob: string = ordered.GetAt(i);

                    // Check if all the required jobs to start this one have finished
                    let canJobBeDone: boolean = true;
                    if (requiredToExpand.Contains(nextJob)) {
                        requiredToExpand.Get(nextJob).Values.forEach((r: string) => {
                            if (!completedJobs.Contains(r)) {
                                canJobBeDone = false;
                            }
                        })
                    }

                    // If it can't, try the next one
                    if (!canJobBeDone) {
                        continue;
                    }

                    // Assign job and remove from pool
                    ordered.RemoveAt(i);
                    workerBusyOn.Set(workerId, nextJob);
                    console.log("[" + time + "]", "assigned job", nextJob, "to", workerId);
                    workerBusyTill.Set(workerId, time + letterCostLookup.Get(nextJob));
                    break;
                }
            }

            time++;

        }
        return (time - 1).toString();
    }
}

export default Solver;