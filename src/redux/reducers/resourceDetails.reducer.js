const resourceDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_ONE_RESOURCE':
            return action.payload;
        case 'SET_VET_RESOURCE':
            return action.payload;
        default:
            return state;
    }
}

export default resourceDetails;