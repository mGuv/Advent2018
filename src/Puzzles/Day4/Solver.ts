import {Moment} from 'moment';

import * as moment from 'moment';

import SleepWindow from './SleepWindow';


class Solver {
    public Solve(input: string): { partA: number, partB: number } {
        const sleepWindows: SleepWindow[] = this.ParseInput(input);
        const guardsTotalSleep: Dictionary<number> = {};
        const guardsSleepPerMinute: Dictionary<Dictionary<number>> = {};

        sleepWindows.forEach((sleepWindow: SleepWindow) => {
            if (!guardsTotalSleep.hasOwnProperty(sleepWindow.GuardId)) {
                guardsTotalSleep[sleepWindow.GuardId] = 0;
                guardsSleepPerMinute[sleepWindow.GuardId] = {};
            }
            sleepWindow.GetMinutes().forEach((minute: number) => {
                guardsTotalSleep[sleepWindow.GuardId] += 1;
                if (!guardsSleepPerMinute[sleepWindow.GuardId].hasOwnProperty(minute)) {
                    guardsSleepPerMinute[sleepWindow.GuardId][minute] = 0;
                }
                guardsSleepPerMinute[sleepWindow.GuardId][minute] += 1;
            });
        });

        let sleepiestGuard: number = 0;
        let sleepiestTotal: number = 0;

        Object.keys(guardsTotalSleep).forEach((guardId: string) => {
            const total: number = guardsTotalSleep[guardId];
            if (total > sleepiestTotal) {
                sleepiestGuard = Number(guardId);
                sleepiestTotal = total;
            }
        });

        // Now find his sleepiest minute
        let sleepiestMinute: number = 0;
        let sleepiestMinuteTotal: number = 0;
        Object.keys(guardsSleepPerMinute[sleepiestGuard]).forEach((minute: string) => {
            const total: number = guardsSleepPerMinute[sleepiestGuard][minute];
            if (total > sleepiestMinuteTotal) {
                sleepiestMinuteTotal = total;
                sleepiestMinute = Number(minute);
            }
        });

        const answerA = sleepiestGuard * sleepiestMinute;

        let sleepiestGuardByMinute: number = 0;
        let sleepiestGuardMinute: number = 0;
        let sleepiestGuardMinuteTotal: number = 0;

        // we actually have enough data to solve the other now...
        Object.keys(guardsSleepPerMinute).forEach((guardId: string) => {

            Object.keys(guardsSleepPerMinute[guardId]).forEach((minute: string) => {
                const total: number = guardsSleepPerMinute[guardId][minute];
                if (total > sleepiestGuardMinuteTotal) {
                    sleepiestGuardByMinute = Number(guardId);
                    sleepiestGuardMinute = Number(minute);
                    sleepiestGuardMinuteTotal = total;
                }
            });
        });

        return {partA: answerA, partB: sleepiestGuardByMinute * sleepiestGuardMinute};

    }

    private ParseInput(input: string): SleepWindow[] {
        // First order the lists so they can be streamed in order to easily build windows
        const inputs: string[] = input.split("\n");
        inputs.sort((a: string, b: string) => {
            const timestampA: Moment = moment(a.substr(1, 16));
            const timestampB: Moment = moment(b.substr(1, 16));

            return timestampA < timestampB ? -1 : 1;
        });

        const windows: SleepWindow[] = [];
        let currentGuard: number = 0;
        let startTime: Moment | null = null;

        for (let i = 0; i < input.length; i++) {
            const current: string = inputs[i];
            // Some reason some inputs are coming out blank
            if (!current) {
                continue;
            }

            const timestamp: Moment = moment(current.substr(1, 16));
            const message = current.substr(19);

            if (message[0] === "G") {
                const matches: RegExpMatchArray | null = /-?\d+/g[Symbol.match](message);
                if (!matches) {
                    continue;
                }
                currentGuard = Number(matches[0]);
            } else if (startTime === null) {
                startTime = timestamp;
            } else {
                windows.push(new SleepWindow(currentGuard, startTime, timestamp));
                startTime = null;
            }
        }
        return windows;
    }
}

export default Solver;