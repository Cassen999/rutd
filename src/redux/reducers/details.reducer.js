const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_ONE_VET':
            return action.payload;
        default:
            return state;
    }
}

export default details;