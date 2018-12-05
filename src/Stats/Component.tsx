import * as React from 'react';

import {Moment} from 'moment';

import * as moment from 'moment';


interface IState {
    input: string
    answer1: string,
    answer2: string,
    selectedPart: string,
    solvesByPartByPerson: Dictionary<Dictionary<Moment>>
    submitted: boolean,
}

class Component extends React.Component<{}, IState> {


    public constructor(props: {}) {
        super(props);
        this.state = {
            answer1: "",
            answer2: "",
            input: "",
            selectedPart: "",
            solvesByPartByPerson: {},
            submitted: false,
        }
    }

    public render(): JSX.Element {

        if (this.state.submitted) {
            let names:string[] = [];
            if(this.state.selectedPart.length > 0) {
                // get all the people for that part
                names = Object.keys(this.state.solvesByPartByPerson[this.state.selectedPart]);
                names.sort((a:string, b:string) => {
                    return this.state.solvesByPartByPerson[this.state.selectedPart][a] < this.state.solvesByPartByPerson[this.state.selectedPart][b] ? -1:0;
                });
            }
            const options: string[] = Object.keys(this.state.solvesByPartByPerson);
            return (
                <React.Fragment>
                    <select onChange={this.showPart}>
                        {
                            options.map((key:string) => {
                                return <option key={key} value={key}>{key}</option>
                            })
                        }
                    </select>
                    {
                        names.length > 0 &&
                            names.map((name:string) => {
                                return <div  key={name} className={"stats-table"}><div className={"stats-table__name"}>{name}</div><div className={"stat-table__time"}>{this.state.solvesByPartByPerson[this.state.selectedPart][name].format('YYYY-MM-DD H:mm:ss')}</div></div>;
                            })
                    }
                </React.Fragment>
            )
        }

        return (
            <React.Fragment>
                <input onChange={this.updateInput} />
                <button onClick={this.submit}>Get</button>
            </React.Fragment>


        );
    }

    private showPart = (e: React.FormEvent<HTMLSelectElement>) => {
        this.setState({selectedPart: e.currentTarget.value});
    }

    private updateInput = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            input: e.currentTarget.value,
        });
    };

    private submit = () => {
        const solvesByPartByPerson: Dictionary<Dictionary<Moment>> = {};
        const thing: IResponse = JSON.parse(this.state.input);
        Object.keys(thing.members).forEach((memberId: string) => {
            const member: IMember = thing.members[memberId]
            Object.keys(member.completion_day_level).forEach((day: string) => {

                Object.keys(member.completion_day_level[day]).forEach((part: string) => {
                    if(!solvesByPartByPerson.hasOwnProperty("Day" + day + " - Part " + part)) {
                        solvesByPartByPerson["Day" + day + " - Part " + part] = {};
                    }
                    const time: Moment = moment.unix(Number(member.completion_day_level[day][part].get_star_ts));
                    solvesByPartByPerson["Day" + day + " - Part " + part][member.name] = time;
                });
            });
        });

        console.log(thing);
        this.setState({
            solvesByPartByPerson,
            submitted: true,
        });
    }
}

interface IMember {
    name: string;
    completion_day_level: Dictionary<Dictionary<{ get_star_ts: string }>>;
}

interface IResponse {
    members: Dictionary<IMember>;
}

export default Component;