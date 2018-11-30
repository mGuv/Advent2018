import * as React from 'react';
import {IItem} from './index';
import Item from './Item';

interface IProps {
    items: IItem[],
    onNodeSelected: (node: React.ComponentType<{}>) => void,
    defaultItem: IItem
}

interface IState {
    selectedItem: IItem
}

class Menu extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            selectedItem: props.defaultItem,
        };
    }

    public render(): JSX.Element {
        return (
            <div className="nav-menu">
                {
                    this.props.items.map((item: IItem) => {
                        return (
                            <Item selected={this.state.selectedItem === item} key={item.title} select={this.onItemSelected} item={item} />);
                    })
                }
            </div>
        );
    }

    private onItemSelected = (item: IItem) => {
        this.setState({
            selectedItem: item,
        });
        this.props.onNodeSelected(item.component);
    }

}

export default Menu;
