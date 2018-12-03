import * as React from 'react';
import {default as Part1Solver} from './Part1/Solver';
import {default as Part2Solver} from './Part2/Solver';


interface IState {
    input: string
    answer1: number,
    answer2: number,
    submitted: boolean
}

class Component extends React.Component<{}, IState> {

    private part1Solver: Part1Solver = new Part1Solver();
    private part2Solver: Part2Solver = new Part2Solver();

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
                <div>This puzzle takes a series of numbers and deals with summing them up in order.</div>
                <div>The input is in the form of a string of various integers marked by their sign, positive or negative</div>
                <div>E.g. "+3 -5 +2 -7"</div>
                <div>Part 1</div>
                <div>Difficulty: 0/10</div>
                <div>The answer to this part is super easy and requires summing all the numbers</div>
                {this.state.submitted === true &&
                <div>
                    <p>Part 1 Answer: {this.state.answer1}</p>
                </div>
                }
                <div>Part 2</div>
                <div>Difficulty: 1/10</div>
                <div>The answer to this part requires the same logic as before, only this time the calculation can keep repeating until a duplication is detected. This requires tracking the cumulative total so far, including the initial 0. The easiest way to do this is with a Dictionary lookup.</div>
                {this.state.submitted === true &&
                <div>
                    <p>Part 2 Answer: {this.state.answer2}</p>
                </div> }
                <div><input onChange={this.updateInput}/>
                    <button onClick={this.submit}>Solve</button>
                </div>
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