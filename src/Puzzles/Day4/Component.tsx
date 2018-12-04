import * as React from 'react';
import {default as Solver} from './Solver';

interface IState {
    input: string
    answer1: number,
    answer2: number,
    submitted: boolean
}

class Component extends React.Component<{}, IState> {

    private solver: Solver = new Solver();

    public constructor(props: {}) {
        super(props);
        this.state = {
            answer1: 0,
            answer2: 0,
            input: "",
            submitted: false,
        }
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <div>This puzzle takes a collection of timestamped guard status messages and deals with detecting the sleepiest guards and times</div>
                <div>There are three types of message: 1) a guard change 2) a guard falling asleep and 3) a guard waking up</div>
                <div>E.g.
                    [1518-11-01 00:00] Guard #10 begins shift
                    [1518-11-01 00:05] falls asleep
                    [1518-11-01 00:25] wakes up</div>
                <div>Part 1</div>
                <div>Difficulty: 3/10</div>
                <div>To answer this part, first the set must be ordered by the timestamp</div>
                <div>Each series of messages can then be converted in to a sleep window, a length of time a given guard was asleep for</div>
                <div>This is made possible as it always starts with a guard starting a shift message, then zero or more sequences of a Sleep -> Wakeup message</div>
                <div>Once all sleep windows have been found, every minute inside these windows can be tallied against each guard</div>
                <div>These tallies can then be used to identify the required parts fot the answer: the guard asleep the longest in total and that specific guard's sleepiest minute</div>
                {this.state.submitted === true &&
                <div>
                    <p>Part 1 Answer: {this.state.answer1}</p>
                </div>
                }
                <div>Part 2</div>
                <div>Difficulty: 0/10</div>
                <div>If you were able to answer Part 1 - you should have everything you need to solve Part 2. Part 2 is a subset of the work required for part 1</div>
                <div>Each minute per guard was already being totalled, which means it should be easy to detect the sleepiest minute across all guards</div>
                <div><textarea onChange={this.updateInput}/>
                    <button onClick={this.submit}>Solve</button>
                </div>
                {this.state.submitted === true &&
                <div>
                    <p>Part 2 Answer: {this.state.answer2}</p>
                </div> }
            </React.Fragment>


        );
    }

    private updateInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
        this.setState({
            input: e.currentTarget.value,
        });
    };

    private submit = () => {
        const answer:{partA:number, partB:number} = this.solver.Solve(this.state.input);
        this.setState({
            answer1: answer.partA,
            answer2: answer.partB,
            submitted: true,
        });
    }
}

export default Component;