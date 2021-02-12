const dropdownReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DROPDOWN':
            return action.payload;
        default:
            return state;
    }
}

export default dropdownReducer;