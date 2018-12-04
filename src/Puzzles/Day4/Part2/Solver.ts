import {Moment} from 'moment';
import * as moment from 'moment';

class Solver
{
    public Solve(input: string): number {



        const inputs:string[] = input.split("\n");
        inputs.sort((a:string, b:string) => {
            const timestampA: Moment = moment(a.substr(1, 16));
            const timestampB: Moment = moment(b.substr(1, 16));

            return timestampA < timestampB ? -1 : 1;
        });
        for(let i = 0; i < input.length; i++) {
            const current: string = inputs[i];
            if (!current) {
                continue;
            }
        }


        const sleepPattern: Dictionary<Dictionary<number>> = {};
        let sleepingGuard: string = "";
        let timestampStart: Moment | null = null;

        for(let i = 0; i < input.length; i++) {
            const current:string = inputs[i];
            if(!current) {
                continue;
            }
            const timestamp: Moment = moment(current.substr(1, 16));
            const message = current.substr(19);

            if(message[0] === "G") {
                const matches:RegExpMatchArray | null= /-?\d+/g[Symbol.match](message);
                if(matches) {
                    sleepingGuard = matches[0];
                    if(!sleepPattern.hasOwnProperty(sleepingGuard)) {
                        sleepPattern[sleepingGuard] = {};
                    }
                }
                continue;
            }

            if(timestampStart === null) {
                timestampStart = timestamp;
            } else {
                const timestampEnd: Moment = moment(current.substr(1,16));
                while(timestampStart < timestampEnd) {
                    const min:string = timestampStart.format('mm');
                    if(!sleepPattern[sleepingGuard].hasOwnProperty(min)) {
                        sleepPattern[sleepingGuard][min] = 0;
                    }
                    sleepPattern[sleepingGuard][min] += 1;
                    timestampStart.add("1", "minute");
                    timestampStart = timestampStart.clone();
                }
                timestampStart = null;
            }
        }

        let sleepyGuard:string = "";
        let longestTime:number = 0;
        let longestMinute:string = "";

        Object.keys(sleepPattern).forEach((guard:string) => {
            const guardPattern: Dictionary<number> = sleepPattern[guard];

            Object.keys(guardPattern).forEach((minute:string) => {
                const total:number = guardPattern[minute];
                if(total > longestTime) {
                    sleepyGuard = guard;
                    longestTime = total;
                    longestMinute = minute;
                }
            });
        });

        return Number(sleepyGuard) * Number(longestMinute);
    }
}

export default Solver;