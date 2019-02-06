//Action creator
export const selectBread = bread => {
    //return an action
    return {
        type: 'SELECTED_BREAD',
        payload: bread
    };
};