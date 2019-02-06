import React from 'react';
import BreadList from './BreadList';
import BreadDetail from './BreadDetail';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <BreadList />
                </div>
                <div className="column eight wide">
                    <BreadDetail />
                </div>
            </div>
        </div>
    );
};

export default App;