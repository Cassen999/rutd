const marriageDropdownReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MARRIAGE_DROPDOWN':
            return action.payload;
        default:
            return state;
    }
}

export default marriageDropdownReducer;