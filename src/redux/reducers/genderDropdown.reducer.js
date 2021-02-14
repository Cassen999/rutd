const genderDropdownReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENDER_DROPDOWN':
            return action.payload;
        default:
            return state;
    }
}

export default genderDropdownReducer;