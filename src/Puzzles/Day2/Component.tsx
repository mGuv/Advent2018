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
                <div>This puzzle takes a series of strings and deals with analysing them for information before calculating a checksum</div>
                <div>Difficulty: 2/10</div>
                <div>The solution requires some basic string parsing, temporary storage of data.</div>
                <div> Part A took 24 mins, Part B took 11 minutes</div>
                <div><input onChange={this.updateInput}/>
                    <button onClick={this.submit}>Solve</button>
                </div>
                {this.state.submitted === true &&
                <div>
                    <p>Part A Answer: {this.state.answer1}</p>
                    <p>Part B Answer: {this.state.answer2}</p>
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