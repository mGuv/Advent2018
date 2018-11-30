import * as React from 'react';

export interface IItem {
    title: string,
    component: React.ComponentType<{}>
}

export {default as Menu} from "./Menu";