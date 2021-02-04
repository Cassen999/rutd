const vetReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_VET':
            return action.payload;
        default:
            return state;
    }
};

export default vetReducer;