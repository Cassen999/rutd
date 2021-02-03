const acctTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ACCT_TYPE':
            return action.payload;
        default:
            return state;
    }
};

export default acctTypeReducer;
