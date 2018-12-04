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
                <div>This puzzle takes a series of area "Claims" and deals with positioning them in a grid to check for overlaps</div>
                <div>Each claim has an ID, a starting X,Y coordinate and a Width x Height</div>
                <div>E.g. "#123 @ 3,2: 5x4"</div>
                <div>Part 1</div>
                <div>Difficulty: 2/10</div>
                <div>To answer this part, each claim must be converted in to a usable format - then have it's area projected in to a grid</div>
                <div>By counting the number of Claims that wish to use each Cell, we can easily spot cells that overlap by looking for 2+ claims on a single cell</div>
                <div>If a dictionary is used here, there is no need to initialise the size of the grid itself</div>
                {this.state.submitted === true &&
                <div>
                    <p>Part 1 Answer: {this.state.answer1}</p>
                </div>
                }
                <div>Part 2</div>
                <div>Difficulty: 2/10</div>
                <div>To answer this part, you must just apply the previous solution but keep track of which IDs caused overlaps.</div>
                <div>By marking the two offending Claims when an overlap happens, there should be a single claim at the end that had zero overlaps</div>
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
            answer1: this.part1Solver.Solve(this.state.input),
            answer2: this.part2Solver.Solve(this.state.input),
            submitted: true,
        });
    }
}

export default Component;