import * as React from 'react';

class Home extends React.Component<{}>
{
    public render(): JSX.Element
    {
        return (
            <div>
                <p>Welcome to my attempt at Advent 2018.</p>
                <p>Pick a puzzle on the left to see details on that puzzle</p>
            </div>
        );
    }
}

export default Home;