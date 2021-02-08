const resourceSearchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESOURCE_SEARCH':
            return action.payload;
        case 'UNSET_RESOURCE_SEARCH':
            return state = []
        default:
            return state;
    }
};

export default resourceSearchReducer;