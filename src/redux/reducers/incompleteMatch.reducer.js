const incompleteMatchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INCOMPLETE_MATCHES':
            return action.payload;
        default:
            return state;
    }
};

export default incompleteMatchReducer;