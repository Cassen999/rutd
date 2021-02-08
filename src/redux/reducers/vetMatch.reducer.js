const vetMatchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_VET_MATCHES':
            return action.payload;
        default:
            return state;
    }
};

export default vetMatchReducer;