import React from 'react';
import BreadList from './BreadList';
import BreadDetail from './BreadDetail';

const App = () => {
    const marginTopStyle = {
        marginTop: '20px'
    }
    return (
        <div className="ui container grid" style={marginTopStyle}>
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