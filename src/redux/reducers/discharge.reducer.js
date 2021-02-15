const dischargeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DISCHARGE':
            return action.payload;
        default:
            return state;
    }
}

export default dischargeReducer;