import * as React from 'react';

import {IItem, Menu} from './Navigation';
import {NotImplemented} from './Puzzles';

import './App.css';
import Home from './Home';
import {default as Day1} from './Puzzles/Day1/Component';
import {default as Day2} from './Puzzles/Day2/Component';
import {default as Day3} from './Puzzles/Day3/Component';
import {default as Day4} from './Puzzles/Day4/Component';
import {default as Day5} from './Puzzles/Day5/Component';
import {default as Day6} from './Puzzles/Day6/Component';
import {default as Day7} from './Puzzles/Day7/Component';
import {default as Day8} from './Puzzles/Day8/Component';
import {default as Day9} from './Puzzles/Day9/Component';




interface IState {
    currentNode: React.ComponentType<{}>
};

class App extends React.Component<{}, IState> {

    private readonly navItems: IItem[] = [
        {title: "Home", component: Home},
        {title: "Day 1 - Chronal Calibration", component: Day1},
        {title: "Day 2 - Inventory Management System", component: Day2},
        {title: "Day 3 - No Matter How You Slice It", component: Day3},
        {title: "Day 4 - Repose Record", component: Day4},
        {title: "Day 5 - Alchemical Reduction", component: Day5},
        {title: "Day 6 - ???", component: Day6},
        {title: "Day 7 - ???", component: Day7},
        {title: "Day 8 - ???", component: Day8},
        {title: "Day 9 - ???", component: Day9},
        {title: "Day 10 - ???", component: NotImplemented},
        {title: "Day 11 - ???", component: NotImplemented},
        {title: "Day 12 - ???", component: NotImplemented},
        {title: "Day 13 - ???", component: NotImplemented},
        {title: "Day 14 - ???", component: NotImplemented},
        {title: "Day 15 - ???", component: NotImplemented},
        {title: "Day 16 - ???", component: NotImplemented},
        {title: "Day 17 - ???", component: NotImplemented},
        {title: "Day 18 - ???", component: NotImplemented},
        {title: "Day 19 - ???", component: NotImplemented},
        {title: "Day 20 - ???", component: NotImplemented},
        {title: "Day 21 - ???", component: NotImplemented},
        {title: "Day 22 - ???", component: NotImplemented},
        {title: "Day 23 - ???", component: NotImplemented},
        {title: "Day 24 - ???", component: NotImplemented},
        {title: "Day 25 - ???", component: NotImplemented},
    ];

    public constructor(props: {}) {
        super(props);
        this.state = {
            currentNode: this.navItems[0].component,
        };
    }

    public render(): JSX.Element {
        return (
            <div className="App">
                <Menu items={this.navItems} onNodeSelected={this.changeView} defaultItem={this.navItems[0]} />
                <div className="content">
                    {<this.state.currentNode />}
                </div>
            </div>
        );
    }

    private changeView = (node: React.ComponentType<{}>) => {
        this.setState({
            currentNode: node,
        })
    }
}

export default App;
