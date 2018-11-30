import * as React from 'react';

import {IItem, Menu} from './Navigation';
import {NotImplemented} from './Puzzles';

import './App.css';
import Home from './Home';

interface IState {
    currentNode: React.ComponentType<{}>
};

class App extends React.Component<{}, IState> {

    private readonly navItems: IItem[] = [
        {title: "Home", component: Home},
        {title: "Day 1 - ???", component: NotImplemented},
        {title: "Day 2 - ???", component: NotImplemented},
        {title: "Day 3 - ???", component: NotImplemented},
        {title: "Day 4 - ???", component: NotImplemented},
        {title: "Day 5 - ???", component: NotImplemented},
        {title: "Day 6 - ???", component: NotImplemented},
        {title: "Day 7 - ???", component: NotImplemented},
        {title: "Day 8- ???", component: NotImplemented},
        {title: "Day 9 - ???", component: NotImplemented},
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
