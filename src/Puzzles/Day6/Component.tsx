import * as React from 'react';
// import {default as Part1Solver} from './Part1/Solver';
import {default as Part2Solver} from './Part2/Solver';


interface IState {
    input: string
    answer1: string,
    answer2: string,
    submitted: boolean
}

class Component extends React.Component<{}, IState> {

    // private part1Solver: Part1Solver = new Part1Solver();
    private part2Solver: Part2Solver = new Part2Solver();

    public constructor(props: {}) {
        super(props);
        this.state = {
            answer1: "",
            answer2: "",
            input: "",
            submitted: false,
        }
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                {this.state.submitted === true &&
                <div>
                    <p>Part 1 Answer: {this.state.answer1}</p>
                </div>
                }
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
        this.setState({
            // answer1: this.part1Solver.Solve(this.state.input),
            answer2: this.part2Solver.Solve(this.state.input),
            submitted: true,
        });
    }
}

export default Component;