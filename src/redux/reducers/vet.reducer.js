const vetReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_VET':
            return action.payload;
        case 'UNSET_VET':
            return state = []
        default:
            return state;
    }
};

export default vetReducer;