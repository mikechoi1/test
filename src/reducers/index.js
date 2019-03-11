import { combineReducers } from 'redux';

const breadReducer = () => {
    return [
        {name: 'resume', price: '0'},
        {name: 'bagel', price: '1.00'},
        {name: 'sliced loaf', price: '3.00'},
        {name: 'brioche', price: '1.00'},
        {name: 'baguette', price: '1.50'},
        {name: 'croissant', price: '2.00'},
        {name: 'dutch crunch', price: '1.00'}
    ];
};

const selectedBreadReducer = (selectedBread = null, action) => {
    switch(action.type) {
        case 'SELECTED_BREAD':
            return action.payload;
        default:
            return selectedBread;
    }
};

export default combineReducers({
    breads: breadReducer,
    selectedBread: selectedBreadReducer
});
