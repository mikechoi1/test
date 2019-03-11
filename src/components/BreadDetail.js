import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ bread }) => {
    if(!bread) {
        return <div>Select a bread or my resume</div>
    }
    if(bread.price === '0') {
        return(
            <div>
                <a href="resume.pdf" download="MichaelChoiResume.pdf">Download a copy of my resume</a>
            </div>
        );
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