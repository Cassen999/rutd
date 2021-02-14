const existReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_VET_EXIST':
            return action.payload
        case 'UNSET_VET_EXIST':
            return state
        default:
            return state;
    }
};

export default existReducer;