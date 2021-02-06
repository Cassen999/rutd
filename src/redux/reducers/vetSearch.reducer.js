const vetSearchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_VET_SEARCH':
            return action.payload;
        case 'UNSET_VET_SEARCH':
            return state = []
        default:
            return state;
    }
};

export default vetSearchReducer;