import * as React from 'react';
import {IItem} from './index';

interface IProps {
    select: (item: IItem) => void,
    item: IItem,
    selected: boolean
}

class Item extends React.Component<IProps> {
    public render(): JSX.Element {
        const classes:string[] = [
          'nav-menu__item'
        ];

        if(this.props.selected) {
            classes.push('nav-menu__item--selected')
        }

        return (<div className={classes.join(' ')} onClick={this.onSelected}>{this.props.item.title}</div>);
    }

    private onSelected = () => {
        this.props.select(this.props.item);
    };
}

export default Item;