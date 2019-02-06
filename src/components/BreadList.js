import React from 'react';
import { connect } from 'react-redux';
import { selectBread } from '../actions';

class BreadList extends React.Component {
    renderList() {
        return this.props.breads.map((bread) => {
            return (
                <div className="item" key={bread.name}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectBread(bread)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{bread.name}</div>
                </div>
            );
        });
    }
    
    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { breads: state.breads };
};

export default connect(mapStateToProps, { selectBread })(BreadList);