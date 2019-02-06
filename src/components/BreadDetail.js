import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ bread }) => {
    if(!bread) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: { bread.name }
                <br />
                Price: ${ bread.price }
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { bread: state.selectedBread }
};

export default connect(mapStateToProps)(SongDetail);