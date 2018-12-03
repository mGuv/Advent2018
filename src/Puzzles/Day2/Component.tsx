import * as React from 'react';
import {default as Part1Solver} from './Part1/Solver';
import {default as Part2Solver} from './Part2/Solver';


interface IState {
    input: string
    answer1: number,
    answer2: string,
    submitted: boolean
}

class Component extends React.Component<{}, IState> {

    private part1Solver: Part1Solver = new Part1Solver();
    private part2Solver: Part2Solver = new Part2Solver();

    public constructor(props: {}) {
        super(props);
        this.state = {
            answer1: 0,
            answer2: "",
            input: "",
            submitted: false,
        }
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <div>This puzzle takes a series of strings and deals with analysing them for information</div>
                <div>The input is in the form of a series of "box ids" in the form of a string of characters</div>
                <div>E.g. "abcaab"</div>
                <div>Part 1</div>
                <div>Difficulty: 1/10</div>
                <div>To answer this part, each unique character in the id should be tallied and each ID must then state if it has a character than repeats exactly 2 times and if a character repeats exactly 3 times</div>
                <div>This should be computed for every id and then finally multiplying the total number of IDs that had a match of 2 by the total number of ids that had a match of 3</div>
                {this.state.submitted === true &&
                <div>
                    <p>Part 1 Answer: {this.state.answer1}</p>
                </div>
                }
                <div>Part 2</div>
                <div>Difficulty: 1/10</div>
                <div>To answer this part, each ID must be compared against every other ID until they differ by exactly one character in one location</div>
                <div>This is easiest to achieve by just comparing each unique pair and counting their differences, the instant a mismatch of 2 is found you can skip the current comparing id</div>
                <div>If a comparison returns a difference of 1, you have found the correct IDs and can now figure out the matching characters</div>
                <div><input onChange={this.updateInput}/>
                    <button onClick={this.submit}>Solve</button>
                </div>
                {this.state.submitted === true &&
                <div>
                    <p>Part 2 Answer: {this.state.answer2}</p>
                </div> }
            </React.Fragment>


        );
    }

    private updateInput = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            input: e.currentTarget.value,
        });
    };

    private submit = () => {
        this.setState({
            answer1: this.part1Solver.Solve(this.state.input),
            answer2: this.part2Solver.Solve(this.state.input),
            submitted: true,
        });
    }
}

export default Component;